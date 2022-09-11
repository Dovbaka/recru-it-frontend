import { AnyAction } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { AppStateType, InferActionsTypes } from '../store';
import {
    CLEAR_ERRORS, INITIALIZE_APP,
    LOG_OUT,
    LOGIN_FAILURE,
    LOGIN_START,
    LOGIN_SUCCESS,
    REFRESH_TOKEN,
    REFRESH_TOKEN_FAILURE,
    SET_AUTH,
} from './actionTypes';
import AuthService from '../../services/AuthService';
import { AuthResponse } from '../../types/types';

export const login =
  (email: string, password: string): ThunkAction<void, AppStateType, unknown, AnyAction> =>
  async dispatch => {
    dispatch(actions.loginStart());
    try {
      const response = await AuthService.login(email, password);
      localStorage.setItem('userInfo', JSON.stringify(response.data));
      return dispatch(actions.loginSuccess(response.data));
    } catch (error) {
      return dispatch(actions.loginFail(error));
    }
  };

//Refresh tokens and set new in state and localStorage
export const refresh =
  (token: string): ThunkAction<void, AppStateType, unknown, AnyAction> =>
  async dispatch => {
    try {
      const response = await AuthService.refreshToken(token);
      return dispatch(actions.refreshToken({ access: response.data.access, refresh: token }));
    } catch (err) {
      return dispatch(actions.refreshTokenFail());
    }
  };

//TODO: Provide types for arguments
export const actions = {
  initializeApp: () => ({ type: INITIALIZE_APP } as const),
  loginStart: () => ({ type: LOGIN_START } as const),
  loginSuccess: (payload: AuthResponse) => ({ type: LOGIN_SUCCESS, payload: payload } as const),
  loginFail: (error: unknown) => ({ type: LOGIN_FAILURE, payload: error } as const),
  logOut: () => ({ type: LOG_OUT } as const),
  refreshToken: (token: { access: string; refresh: string }) => ({ type: REFRESH_TOKEN, payload: token } as const),
  refreshTokenFail: () => ({ type: REFRESH_TOKEN_FAILURE } as const),
  setAuth: (token: { access: string; refresh: string }) => ({ type: SET_AUTH, payload: token } as const),
  clearErrors: () => ({ type: CLEAR_ERRORS } as const),
};

export type AuthActionsType = InferActionsTypes<typeof actions>;
