import { RecruitActionsType } from './actions';
import {
  CLEAR_RECRUIT,
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
import { RecruitData, RecruitInfo } from '../../interfaces/RecruitInterface';

const initialState = {
  userInfo: {} as RecruitInfo,
  userRole: null as number | null,
  userFile: null as File | null,
  userData: [] as RecruitData[],
  testIsSent: false,
  searchParams: undefined as RecruitData | null | undefined,
  isPending: false,
};

const RecruitReducer = (state = initialState, action: RecruitActionsType) => {
  switch (action.type) {
    case GET_CANDIDATES_DATA_START:
      return {
        ...state,
        isPending: true,
      };
    case GET_CANDIDATES_DATA_SUCCESS:
      return {
        ...state,
        userData: action.payload,
        isPending: false,
      };
    case GET_CANDIDATES_DATA_FAILED:
      return {
        ...state,
        isPending: false,
      };

    case SET_USER_INFO:
      return {
        ...state,
        userInfo: action.payload,
      };

    case SET_USER_ROLE:
      return {
        ...state,
        userRole: action.payload,
      };

    case SET_USER_FILE:
      return {
        ...state,
        userFile: action.payload,
      };

    case SET_PROFILE_SCORE_START:
      return {
        ...state,
        isPending: true,
      };

    case SET_PROFILE_SCORE_SUCCESS:
      return {
        ...state,
        testIsSent: true,
        isPending: false,
      };

    case SET_PROFILE_SCORE_FAILED:
      return {
        ...state,
        isPending: false,
      };

    case DELETE_CANDIDATE_SUCCESS:
      return {
        ...state,
        userData: state.userData.filter(el => el.id !== action.payload.id),
      };

    case CLEAR_RECRUIT:
      return initialState;

    default:
      return state;
  }
};

export default RecruitReducer;
