import { db } from "../firebase";
import { doc, getDoc, arrayUnion, writeBatch, serverTimestamp, collection, query, where, onSnapshot } from "firebase/firestore";

// Deterministic doc id so a duplicate submit (double-click, retry) overwrites
// the same doc instead of creating a second one.
function submissionId(code, playerId) {
  return `${code}_${playerId}`;
}

export async function getSubmission(code, playerId) {
  const snap = await getDoc(doc(db, "submissions", submissionId(code, playerId)));
  return snap.exists() ? snap.data() : null;
}

// Live feed of every submission for a round, for the voting grid — keyed by
// roundId rather than fetched one doc at a time per player.
export function subscribeSubmissions(code, callback) {
  const q = query(collection(db, "submissions"), where("roundId", "==", code));
  return onSnapshot(q, (snap) => {
    callback(snap.docs.map((d) => d.data()));
  });
}

export async function submitEntry(code, playerId, html, css) {
  const roundRef = doc(db, "rounds", code);
  const submissionRef = doc(db, "submissions", submissionId(code, playerId));

  const batch = writeBatch(db);
  batch.set(submissionRef, {
    roundId: code,
    playerId,
    html,
    css,
    submittedAt: serverTimestamp(),
  });
  batch.update(roundRef, {
    submittedPlayerIds: arrayUnion(playerId),
  });
  await batch.commit();
}
