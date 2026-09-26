// Static MVP target pool (2 per difficulty, per CLAUDE.md minimum). Swap for a
// Firestore "targets" collection later if the library grows past this.
export const TARGET_POOL = [
  { id: "easy-1", difficulty: "easy", referenceImage: "/targets/easy-1.png" },
  { id: "easy-2", difficulty: "easy", referenceImage: "/targets/easy-2.png" },
  { id: "medium-1", difficulty: "medium", referenceImage: "/targets/medium-1.png" },
  { id: "medium-2", difficulty: "medium", referenceImage: "/targets/medium-2.png" },
  { id: "hard-1", difficulty: "hard", referenceImage: "/targets/hard-1.png" },
  { id: "hard-2", difficulty: "hard", referenceImage: "/targets/hard-2.png" },
];

export function getTargetById(id) {
  return TARGET_POOL.find((t) => t.id === id) ?? null;
}

export function pickRandomTargetId(difficulty) {
  const pool = TARGET_POOL.filter((t) => t.difficulty === difficulty);
  if (pool.length === 0) {
    throw new Error(`No targets available for difficulty "${difficulty}"`);
  }
  return pool[Math.floor(Math.random() * pool.length)].id;
}
