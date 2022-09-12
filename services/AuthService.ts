import API from '../api/api';
import { AxiosResponse } from 'axios';
import { AuthResponse } from '../interfaces/AuthInterface';

export default class AuthService {
  static async login(email: string, password: string): Promise<AxiosResponse<AuthResponse>> {
    return API.post('auth/login', { email, password });
  }

  static async refreshToken(refresh_token: string): Promise<AxiosResponse<AuthResponse>> {
    return API.post(`auth/refresh`, { refresh_token });
  }
}
