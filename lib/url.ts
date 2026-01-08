/**
 * Normalizes a base URL by ensuring it has a protocol.
 * If no protocol is present, defaults to https://
 */
export function getBaseUrl(): string {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";
  
  // If the URL already has a protocol, return it as is
  if (baseUrl.startsWith("http://") || baseUrl.startsWith("https://")) {
    return baseUrl;
  }
  
  // Otherwise, add https:// protocol
  return `https://${baseUrl}`;
}
