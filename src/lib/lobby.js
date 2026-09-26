import { db } from "../firebase";
import { doc, getDoc, setDoc, updateDoc, onSnapshot, writeBatch, serverTimestamp } from "firebase/firestore";
import { pickRandomTargetId } from "./targets";

// Excludes 0/O and 1/I so codes read back over voice/screen without ambiguity.
const CODE_CHARS = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
const CODE_LENGTH = 5;
const MAX_CODE_ATTEMPTS = 5;

function generateLobbyCode() {
  let code = "";
  for (let i = 0; i < CODE_LENGTH; i++) {
    code += CODE_CHARS[Math.floor(Math.random() * CODE_CHARS.length)];
  }
  return code;
}

function defaultSettings() {
  return { timeLimit: 120, difficulty: "easy" };
}

// Small, fixed-lifespan hackathon build: naive random code + retry-on-collision
// is enough, no need for a fancier allocation scheme.
export async function createLobby(host) {
  for (let attempt = 0; attempt < MAX_CODE_ATTEMPTS; attempt++) {
    const code = generateLobbyCode();
    const ref = doc(db, "lobbies", code);
    const snap = await getDoc(ref);
    if (!snap.exists()) {
      await setDoc(ref, {
        code,
        hostId: host.id,
        status: "lobby",
        settings: defaultSettings(),
        players: [host],
      });
      return code;
    }
  }
  throw new Error("Could not generate a unique lobby code, please try again");
}

export async function joinLobby(code, player) {
  const normalized = code.trim().toUpperCase();
  const ref = doc(db, "lobbies", normalized);
  const snap = await getDoc(ref);
  if (!snap.exists()) {
    throw new Error("Lobby not found");
  }
  const data = snap.data();
  if (data.status !== "lobby") {
    throw new Error("This lobby has already started");
  }

  const existingPlayers = data.players || [];
  const alreadyJoined = existingPlayers.some((p) => p.id === player.id);
  const nextPlayers = alreadyJoined
    ? existingPlayers.map((p) => (p.id === player.id ? { ...p, name: player.name } : p))
    : [...existingPlayers, player];

  await updateDoc(ref, { players: nextPlayers });
  return normalized;
}

export function subscribeLobby(code, callback) {
  const ref = doc(db, "lobbies", code.trim().toUpperCase());
  return onSnapshot(ref, (snap) => {
    callback(snap.exists() ? { id: snap.id, ...snap.data() } : null);
  });
}

export async function updateLobbySettings(code, settings) {
  await updateDoc(doc(db, "lobbies", code), { settings });
}

// Idempotent: safe for multiple clients to call at once when they all notice
// the round is fully submitted, no need to elect a single writer.
export async function advanceToVoting(code) {
  await updateDoc(doc(db, "lobbies", code), { status: "voting" });
}

// Round doc id matches the lobby code, one lobby = one round at a time.
export async function startRound(code) {
  const lobbyRef = doc(db, "lobbies", code);
  const lobbySnap = await getDoc(lobbyRef);
  if (!lobbySnap.exists()) {
    throw new Error("Lobby not found");
  }
  const lobby = lobbySnap.data();
  const timeLimit = lobby.settings?.timeLimit ?? 120;
  const difficulty = lobby.settings?.difficulty ?? "easy";
  const targetId = pickRandomTargetId(difficulty);

  const batch = writeBatch(db);
  batch.update(lobbyRef, { status: "round" });
  batch.set(doc(db, "rounds", code), {
    lobbyId: code,
    targetId,
    startedAt: serverTimestamp(),
    endsAt: Date.now() + timeLimit * 1000,
    submittedPlayerIds: [],
  });
  await batch.commit();
}
