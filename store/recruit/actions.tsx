import {
  CLEAR_SEARCH_PARAMS,
  GET_CANDIDATES_DATA_FAILED,
  GET_CANDIDATES_DATA_SUCCESS,
  SET_PROFILE_SCORE_FAILED,
  SET_PROFILE_SCORE_SUCCESS,
  SET_USER_FILE,
  SET_USER_INFO,
  SET_USER_ROLE,
} from './actionTypes';
import { AppStateType, InferActionsTypes } from '../store';
import { Answer, UserDataType, UserInfoType } from '../../types/types';
import { ThunkAction } from 'redux-thunk';
import { AnyAction } from 'redux';
import API from '../../api/api';

export const setProfileAnswers =
  (
    firstName: string,
    lastName: string,
    email: string,
    phoneNumber: string,
    role: number,
    answers: Answer[],
    fileName: string,
  ): ThunkAction<void, AppStateType, unknown, AnyAction> =>
  async dispatch => {
    try {
      await API.post('answer', {
        userData: {
          firstName: firstName,
          lastName: lastName,
          email: email,
          phoneNumber: phoneNumber,
          role: role,
          status: 'new',
          comment: '',
          experience: answers.filter(el => el.category === 'EXPERIENCE').reduce((sum, el) => sum + el.answerValue, 0),
          qualification: answers
            .filter(el => el.category === 'QUALIFICATION')
            .reduce((sum, el) => sum + el.answerValue, 0),
          selfSufficiency: answers
            .filter(el => el.category === 'SELF_SUFFICIENCY')
            .reduce((sum, el) => sum + el.answerValue, 0),
          stressTolerance: answers
            .filter(el => el.category === 'STRESS_TOLERANCE')
            .reduce((sum, el) => sum + el.answerValue, 0),
          communicability: answers
            .filter(el => el.category === 'COMMUNICABILITY')
            .reduce((sum, el) => sum + el.answerValue, 0),
          creativity: answers.filter(el => el.category === 'CREATIVITY').reduce((sum, el) => sum + el.answerValue, 0),
          rationality: answers.filter(el => el.category === 'RATIONALITY').reduce((sum, el) => sum + el.answerValue, 0),
          fileName: fileName,
        },
        answersData: answers,
      });

      return dispatch(actions.setProfileScoreSuccess());
    } catch (err) {
      return dispatch(actions.setProfileScoreFail());
    }
  };

export const getCandidates = (): ThunkAction<void, AppStateType, unknown, AnyAction> => async dispatch => {
  try {
    const data = (await API.get('user')).data as UserDataType[];
    console.log(data);
    return dispatch(actions.getCandidatesSuccess(data));
  } catch (err) {
    console.log(err);
    return dispatch(actions.getCandidatesFail());
  }
};

export const actions = {
  setProfileScoreSuccess: () => ({ type: SET_PROFILE_SCORE_SUCCESS } as const),
  setProfileScoreFail: () => ({ type: SET_PROFILE_SCORE_FAILED } as const),
  setUserInfo: (userInfo: UserInfoType) => ({ type: SET_USER_INFO, payload: userInfo } as const),
  setUserRole: (userRole: number) => ({ type: SET_USER_ROLE, payload: userRole } as const),
  setUserFile: (userFile: File) => ({ type: SET_USER_FILE, payload: userFile } as const),
  getCandidatesSuccess: (data: UserDataType[]) => ({ type: GET_CANDIDATES_DATA_SUCCESS, payload: data } as const),
  getCandidatesFail: () => ({ type: GET_CANDIDATES_DATA_FAILED } as const),
  clearSearchParams: () => ({ type: CLEAR_SEARCH_PARAMS } as const),
};

export type RecruitActionsType = InferActionsTypes<typeof actions>;
