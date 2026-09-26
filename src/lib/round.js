import { db } from "../firebase";
import { doc, onSnapshot } from "firebase/firestore";

export function subscribeRound(code, callback) {
  const ref = doc(db, "rounds", code.trim().toUpperCase());
  return onSnapshot(ref, (snap) => {
    callback(snap.exists() ? { id: snap.id, ...snap.data() } : null);
  });
}
