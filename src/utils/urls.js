/**
 * Empty strings and whitespace are not valid links.
 * Only http(s) profile URLs should render as anchors.
 */
export function hasValidExternalUrl(url) {
  if (typeof url !== "string") {
    return false;
  }

  const trimmed = url.trim();
  if (!trimmed) {
    return false;
  }

  try {
    const parsed = new URL(trimmed);
    return parsed.protocol === "http:" || parsed.protocol === "https:";
  } catch {
    return false;
  }
}
