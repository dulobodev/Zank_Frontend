const normalizeUrl = (url?: string) => {
  if (!url) return undefined;
  try {
    const normalized = new URL(url);
    return normalized.origin + normalized.pathname.replace(/\/$/, "");
  } catch (error) {
    console.warn("VITE_API_URL inválida. Usando fallback http://localhost:8000", error);
    return undefined;
  }
};

const fallback = "http://localhost:8000";

export const API_BASE_URL = normalizeUrl(import.meta.env.VITE_API_URL) ?? fallback;

export const API_ENDPOINTS = {
  register: "/users/",
  login: "/auth/token",
  refresh: "/auth/refresh_token",
  createCheckoutSession: (planName: string) => `/stripe/create-checkout-session/${planName}`,
} as const;


