// Stable per-browser identity so a refresh doesn't create a new "player".
const STORAGE_KEY = "seass_playerId";

export function getPlayerId() {
  let id = localStorage.getItem(STORAGE_KEY);
  if (!id) {
    id = crypto.randomUUID();
    localStorage.setItem(STORAGE_KEY, id);
  }
  return id;
}
