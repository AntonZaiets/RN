import { apiAuth } from './api';
import App from "../../../App";

interface LoginResponse {
  email: string;
  firstName: string;
  gender: string;
  id: number;
  image: string;
  lastName: string;
  refreshToken: string;
  accessToken: string;
  username: string;
}

interface UserResponse {
  id: number;
  username: string;
  firstName: string;
  lastName: string;
}

interface RefreshResponse {
  accessToken: string;
}

export const ApiLogin = async (
  username: string,
  password: string,
): Promise<LoginResponse> => {
  const response = await apiAuth.post<LoginResponse>('/auth/login', {
    username,
    password,
  });
  return response.data;
};


export const getCurrentUser = async (token: string): Promise<UserResponse> => {
  const response = await apiAuth.get<UserResponse>('/auth/me', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};

export const refreshSession = async (
  refreshToken: string,
): Promise<RefreshResponse> => {
  const response = await apiAuth.post<RefreshResponse>('/auth/refresh', {
    refreshToken,
  });
  return response.data;
};
