// Per-round, per-player local draft so a refresh doesn't wipe unsaved edits.
// Not synced anywhere — purely a local safety net before the real submit.
function draftKey(code, playerId) {
  return `seass_draft_${code}_${playerId}`;
}

export function loadDraft(code, playerId) {
  try {
    const raw = localStorage.getItem(draftKey(code, playerId));
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}

export function saveDraft(code, playerId, { html, css }) {
  try {
    localStorage.setItem(draftKey(code, playerId), JSON.stringify({ html, css }));
  } catch {
    // best-effort; a full/blocked localStorage just means no draft persistence
  }
}

export function clearDraft(code, playerId) {
  try {
    localStorage.removeItem(draftKey(code, playerId));
  } catch {
    // ignore
  }
}
