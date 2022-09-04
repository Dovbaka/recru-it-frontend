import {
  CLEAR_SEARCH_PARAMS,
  SET_PROFILE_SCORE_FAILED,
  SET_PROFILE_SCORE_SUCCESS,
  SET_USER_FILE,
  SET_USER_INFO,
  SET_USER_ROLE,
} from './actionTypes';
import { AppStateType, InferActionsTypes } from '../store';
import { Answer, UserInfoType } from '../../types/types';
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
      const req = await API.post('answer', {
        userData: {
          firstName: firstName,
          lastName: lastName,
          email: email,
          phoneNumber: phoneNumber,
          role: role,
          status: 'new',
          comment: '',
          experience: answers
            .filter(el => el.category === 'EXPERIENCE')
            .map(item => item.answerValue)
            .reduce((sum, el) => sum + el, 0),
          qualification: answers
            .filter(el => el.category === 'QUALIFICATION')
            .map(item => item.answerValue)
            .reduce((sum, el) => sum + el, 0),
          selfSufficiency: answers
            .filter(el => el.category === 'SELF_SUFFICIENCY')
            .map(item => item.answerValue)
            .reduce((sum, el) => sum + el, 0),
          stressTolerance: answers
            .filter(el => el.category === 'STRESS_TOLERANCE')
            .map(item => item.answerValue)
            .reduce((sum, el) => sum + el, 0),
          communicability: answers
            .filter(el => el.category === 'COMMUNICABILITY')
            .map(item => item.answerValue)
            .reduce((sum, el) => sum + el, 0),
          creativity: answers
            .filter(el => el.category === 'CREATIVITY')
            .map(item => item.answerValue)
            .reduce((sum, el) => sum + el, 0),
          rationality: answers
            .filter(el => el.category === 'RATIONALITY')
            .map(item => item.answerValue)
            .reduce((sum, el) => sum + el, 0),
          fileName: fileName,
        },
        answersData: answers,
      });

      console.log('REQ', req);
      return dispatch(actions.setProfileScoreSuccess());
    } catch (err) {
      console.log('REQ', err);
      return dispatch(actions.setProfileScoreFail());
    }
  };

export const actions = {
  setProfileScoreSuccess: () => ({ type: SET_PROFILE_SCORE_SUCCESS } as const),
  setProfileScoreFail: () => ({ type: SET_PROFILE_SCORE_FAILED } as const),
  setUserInfo: (userInfo: UserInfoType) => ({ type: SET_USER_INFO, payload: userInfo } as const),
  setUserRole: (userRole: number) => ({ type: SET_USER_ROLE, payload: userRole } as const),
  setUserFile: (userFile: File) => ({ type: SET_USER_FILE, payload: userFile } as const),
  clearSearchParams: () => ({ type: CLEAR_SEARCH_PARAMS } as const),
};

export type RecruitActionsType = InferActionsTypes<typeof actions>;
