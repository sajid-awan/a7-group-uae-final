export async function apiClient<T = unknown>(path: string, opts?: RequestInit): Promise<T> {
  const res = await fetch(path, opts)
  return res.json() as Promise<T>
}

export function fetcher<T = unknown>(path: string, opts?: RequestInit) {
  return apiClient<T>(path, { method: "GET", ...opts })
}
