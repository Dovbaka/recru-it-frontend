import {
  CLEAR_RECRUIT,
  CLEAR_SEARCH_PARAMS,
  GET_CANDIDATES_DATA_FAILED,
  GET_CANDIDATES_DATA_START,
  GET_CANDIDATES_DATA_SUCCESS,
  SET_PROFILE_SCORE_FAILED,
  SET_PROFILE_SCORE_START,
  SET_PROFILE_SCORE_SUCCESS,
  SET_USER_FILE,
  SET_USER_INFO,
  SET_USER_ROLE,
} from './actionTypes';
import { AppStateType, InferActionsTypes } from '../store';
import { Answer, UserData, UserInfo } from '../../types/types';
import { ThunkAction } from 'redux-thunk';
import { AnyAction } from 'redux';
import RecruitService from '../../services/RecruitService';

export const setProfileAnswers =
  (
    firstName: string,
    lastName: string,
    email: string,
    phoneNumber: string,
    role: number,
    answers: Answer[],
    file: File,
  ): ThunkAction<void, AppStateType, unknown, AnyAction> =>
  async dispatch => {
    try {
      dispatch(actions.setProfileScoreStart());
      const awsResponse = await RecruitService.saveFileToS3(file);
      const f = await RecruitService.registerRecruit(
        firstName,
        lastName,
        email,
        phoneNumber,
        role,
        awsResponse.data.Location,
        answers,
      );
      console.log('awsResponse', awsResponse);
      console.log('registerRecruit', f);
      return dispatch(actions.setProfileScoreSuccess());
    } catch (err) {
      return dispatch(actions.setProfileScoreFail());
    }
  };

export const getCandidates = (): ThunkAction<void, AppStateType, unknown, AnyAction> => async dispatch => {
  try {
    dispatch(actions.getCandidatesStart());
    const data = await RecruitService.getRecruitList();
    console.log('getRecruitList', data);
    return dispatch(actions.getCandidatesSuccess(data.data));
  } catch (err) {
    return dispatch(actions.getCandidatesFail());
  }
};

export const actions = {
  setProfileScoreStart: () => ({ type: SET_PROFILE_SCORE_START } as const),
  setProfileScoreSuccess: () => ({ type: SET_PROFILE_SCORE_SUCCESS } as const),
  setProfileScoreFail: () => ({ type: SET_PROFILE_SCORE_FAILED } as const),
  setUserInfo: (userInfo: UserInfo) => ({ type: SET_USER_INFO, payload: userInfo } as const),
  setUserRole: (userRole: number) => ({ type: SET_USER_ROLE, payload: userRole } as const),
  setUserFile: (userFile: File) => ({ type: SET_USER_FILE, payload: userFile } as const),
  getCandidatesStart: () => ({ type: GET_CANDIDATES_DATA_START } as const),
  getCandidatesSuccess: (data: UserData[]) => ({ type: GET_CANDIDATES_DATA_SUCCESS, payload: data } as const),
  getCandidatesFail: () => ({ type: GET_CANDIDATES_DATA_FAILED } as const),
  clearSearchParams: () => ({ type: CLEAR_SEARCH_PARAMS } as const),
  clearRecruit: () => ({ type: CLEAR_RECRUIT } as const),
};

export type RecruitActionsType = InferActionsTypes<typeof actions>;
