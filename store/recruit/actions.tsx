import { CLEAR_SEARCH_PARAMS, SET_USER_FILE, SET_USER_INFO, SET_USER_ROLE } from './actionTypes';
import { InferActionsTypes } from '../store';
import { UserInfoType } from '../../types/types';

export const actions = {
  setUserInfo: (userInfo: UserInfoType) => ({ type: SET_USER_INFO, payload: userInfo } as const),
  setUserRole: (userRole: number) => ({ type: SET_USER_ROLE, payload: userRole } as const),
  setUserFile: (userFile: File) => ({ type: SET_USER_FILE, payload: userFile } as const),
  clearSearchParams: () => ({ type: CLEAR_SEARCH_PARAMS } as const),
};

export type RecruitActionsType = InferActionsTypes<typeof actions>;
