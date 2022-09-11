import API from '../api/api';
import { AxiosResponse } from 'axios';
import {AuthResponse} from "../types/types";

export default class AuthService {
  static async login(email: string, password: string): Promise<AxiosResponse<AuthResponse>> {
    return API.post('auth/login', { email, password });
  }

  static async refreshToken(token: string): Promise<AxiosResponse<any>> {
    return API.post(`auth/refresh`, { token });
  }
}
