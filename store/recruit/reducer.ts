import { RecruitActionsType } from './actions';
import { CLEAR_SEARCH_PARAMS, SET_USER_FILE, SET_USER_INFO, SET_USER_ROLE } from './actionTypes';
import { categoriesScoreType, UserDataType, UserInfoType } from '../../types/types';

const initialState = {
  userInfo: {} as UserInfoType,
  userRole: null as number | null,
  userFile: null as File | null,
  userData: [] as UserDataType[],
  testIsSend: false,
  searchParams: undefined as categoriesScoreType | null | undefined,
};

const RecruitReducer = (state = initialState, action: RecruitActionsType) => {
  switch (action.type) {
    case CLEAR_SEARCH_PARAMS:
      return {
        ...state,
        searchParams: null,
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

    default:
      return state;
  }
};

export default RecruitReducer;
