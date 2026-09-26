import { db } from "../firebase";
import { doc, getDoc, arrayUnion, writeBatch, serverTimestamp } from "firebase/firestore";

// Deterministic doc id so a duplicate submit (double-click, retry) overwrites
// the same doc instead of creating a second one.
function submissionId(code, playerId) {
  return `${code}_${playerId}`;
}

export async function getSubmission(code, playerId) {
  const snap = await getDoc(doc(db, "submissions", submissionId(code, playerId)));
  return snap.exists() ? snap.data() : null;
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
