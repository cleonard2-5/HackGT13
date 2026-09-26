import { db } from "../firebase";
import { doc, setDoc, collection, query, where, onSnapshot } from "firebase/firestore";

// Deterministic doc id so re-voting (changing your pick) overwrites the same
// doc instead of piling up one Vote per click.
function voteId(code, voterId) {
  return `${code}_${voterId}`;
}

export async function castVote(code, voterId, votedForPlayerId) {
  if (voterId === votedForPlayerId) {
    throw new Error("You can't vote for your own submission");
  }
  await setDoc(doc(db, "votes", voteId(code, voterId)), {
    roundId: code,
    voterId,
    votedForPlayerId,
  });
}

export function subscribeVotes(code, callback) {
  const q = query(collection(db, "votes"), where("roundId", "==", code));
  return onSnapshot(q, (snap) => {
    callback(snap.docs.map((d) => d.data()));
  });
}
