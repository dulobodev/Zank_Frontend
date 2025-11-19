import { API_BASE_URL, API_ENDPOINTS } from "@/config/env";

type FetchOptions = Omit<RequestInit, "body"> & {
  body?: BodyInit | null;
  skipAuth?: boolean;
};

class ApiError extends Error {
  status: number;
  payload?: unknown;

  constructor(message: string, status: number, payload?: unknown) {
    super(message);
    this.name = "ApiError";
    this.status = status;
    this.payload = payload;
  }
}

const defaultHeaders: HeadersInit = {
  "Content-Type": "application/json",
};

const parseError = async (response: Response) => {
  try {
    const data = await response.json();
    if (typeof data?.detail === "string") {
      return data.detail;
    }
    if (typeof data?.message === "string") {
      return data.message;
    }
    return JSON.stringify(data);
  } catch {
    return response.statusText || "Erro ao conectar com o servidor";
  }
};

async function apiFetch<TResponse>(path: string, options: FetchOptions = {}): Promise<TResponse> {
  const { skipAuth, headers, body, ...rest } = options;

  const token = !skipAuth ? localStorage.getItem("zank.accessToken") : null;
  const finalHeaders: HeadersInit = {
    ...defaultHeaders,
    ...headers,
    ...(token ? { Authorization: `Bearer ${token}` } : {}),
  };

  const response = await fetch(`${API_BASE_URL}${path}`, {
    method: "GET",
    headers: finalHeaders,
    body,
    ...rest,
  });

  if (!response.ok) {
    const message = await parseError(response);
    throw new ApiError(message, response.status);
  }

  if (response.status === 204) {
    return {} as TResponse;
  }

  return (await response.json()) as TResponse;
}

export interface RegisterPayload {
  username: string;
  email: string;
  password: string;
  phone: string;
}

export interface RegisterResponse {
  id: string;
  username: string;
  email: string;
  phone: string;
  role: string;
}

export const registerUser = async (payload: RegisterPayload) => {
  return apiFetch<RegisterResponse>(API_ENDPOINTS.register, {
    method: "POST",
    body: JSON.stringify(payload),
  });
};

export interface LoginPayload {
  email: string;
  password: string;
}

export interface TokenResponse {
  access_token: string;
  token_type: string;
}

export const loginUser = async ({ email, password }: LoginPayload) => {
  const formData = new URLSearchParams();
  formData.append("username", email);
  formData.append("password", password);

  return apiFetch<TokenResponse>(API_ENDPOINTS.login, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: formData.toString(),
    skipAuth: true,
  });
};

export const refreshToken = async () => {
  return apiFetch<TokenResponse>(API_ENDPOINTS.refresh, {
    method: "POST",
  });
};

export interface CheckoutSessionResponse {
  checkout_url: string;
}

export const createCheckoutSession = async (planName: "mensal" | "anual") => {
  return apiFetch<CheckoutSessionResponse>(API_ENDPOINTS.createCheckoutSession(planName), {
    method: "POST",
  });
};

export { ApiError };

