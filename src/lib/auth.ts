const ACCESS_TOKEN_KEY = "zank.accessToken";

export const saveToken = (token: string) => {
  localStorage.setItem(ACCESS_TOKEN_KEY, token);
};

export const getToken = () => localStorage.getItem(ACCESS_TOKEN_KEY);

export const clearToken = () => localStorage.removeItem(ACCESS_TOKEN_KEY);

export const isAuthenticated = () => Boolean(getToken());

export { ACCESS_TOKEN_KEY };


