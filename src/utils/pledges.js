// Front-end-only pledge storage.
//
// NOTE FOR PRODUCTION: this uses localStorage, so pledges are private to a
// single browser on a single device — there is no shared/live wall across
// visitors. To make this a real shared Pledge Wall, wire it up to a
// lightweight backend (e.g. Supabase or Firebase) and swap the functions
// below for API calls. Flagging this rather than silently faking a "live"
// wall.

const STORAGE_KEY = "ojj_pledges";
const BASE_PLEDGE_COUNT = 214; // starting count so the wall doesn't feel empty at launch

export function getPledges() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

export function addPledge({ name, message }) {
  const pledges = getPledges();
  const pledge = {
    id: `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
    name: name.trim(),
    message: message?.trim() || "",
    createdAt: new Date().toISOString(),
  };
  const next = [pledge, ...pledges];
  localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
  return pledge;
}

export function getPledgeCount() {
  return BASE_PLEDGE_COUNT + getPledges().length;
}
