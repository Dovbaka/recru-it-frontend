import {
  CLEAR_RECRUIT,
  DELETE_CANDIDATE_FAILED,
  DELETE_CANDIDATE_START,
  DELETE_CANDIDATE_SUCCESS,
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
import { Answer, GetRecruitListResponse, RecruitInfo } from '../../interfaces/RecruitInterface';
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
      await RecruitService.registerRecruit(firstName, lastName, email, phoneNumber, role, awsResponse.data, answers);
      return dispatch(actions.setProfileScoreSuccess());
    } catch (err) {
      return dispatch(actions.setProfileScoreFail());
    }
  };

export const getCandidates = (): ThunkAction<void, AppStateType, unknown, AnyAction> => async dispatch => {
  try {
    dispatch(actions.getCandidatesStart());
    const data = await RecruitService.getRecruitList();
    return dispatch(actions.getCandidatesSuccess(data.data));
  } catch (err) {
    return dispatch(actions.getCandidatesFail());
  }
};

export const deleteCandidate =
  (id: string, fileName: string): ThunkAction<void, AppStateType, unknown, AnyAction> =>
  async dispatch => {
    try {
      dispatch(actions.deleteCandidatesStart());
      await RecruitService.deleteCv(fileName);
      await RecruitService.deleteRecruit(id);
      return dispatch(actions.deleteCandidatesSuccess(id));
    } catch (err) {
      return dispatch(actions.deleteCandidatesFail());
    }
  };

export const actions = {
  setProfileScoreStart: () => ({ type: SET_PROFILE_SCORE_START } as const),
  setProfileScoreSuccess: () => ({ type: SET_PROFILE_SCORE_SUCCESS } as const),
  setProfileScoreFail: () => ({ type: SET_PROFILE_SCORE_FAILED } as const),
  setUserInfo: (userInfo: RecruitInfo) => ({ type: SET_USER_INFO, payload: userInfo } as const),
  setUserRole: (userRole: number) => ({ type: SET_USER_ROLE, payload: userRole } as const),
  setUserFile: (userFile: File) => ({ type: SET_USER_FILE, payload: userFile } as const),
  getCandidatesStart: () => ({ type: GET_CANDIDATES_DATA_START } as const),
  getCandidatesSuccess: (data: GetRecruitListResponse[]) =>
    ({ type: GET_CANDIDATES_DATA_SUCCESS, payload: data } as const),
  getCandidatesFail: () => ({ type: GET_CANDIDATES_DATA_FAILED } as const),
  deleteCandidatesStart: () => ({ type: DELETE_CANDIDATE_START } as const),
  deleteCandidatesSuccess: (id: string) => ({ type: DELETE_CANDIDATE_SUCCESS, payload: { id } } as const),
  deleteCandidatesFail: () => ({ type: DELETE_CANDIDATE_FAILED } as const),
  clearRecruit: () => ({ type: CLEAR_RECRUIT } as const),
};

export type RecruitActionsType = InferActionsTypes<typeof actions>;
