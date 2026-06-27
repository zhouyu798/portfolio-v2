const baseUrl = import.meta.env.BASE_URL || "/";

export function assetPath(path) {
  const cleanBase = baseUrl.endsWith("/") ? baseUrl : `${baseUrl}/`;
  const cleanPath = path.replace(/^\/+/, "");

  return `${cleanBase}${cleanPath}`;
}
