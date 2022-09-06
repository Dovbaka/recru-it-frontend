import {RecruitActionsType} from './actions';
import {
  CLEAR_SEARCH_PARAMS,
  GET_CANDIDATES_DATA_SUCCESS,
  SET_USER_FILE,
  SET_USER_INFO,
  SET_USER_ROLE
} from './actionTypes';
import {UserDataType, UserInfoType} from '../../types/types';

const initialState = {
  userInfo: {} as UserInfoType,
  userRole: null as number | null,
  userFile: null as File | null,
  userData: [] as UserDataType[],
  testIsSend: false,
  searchParams: undefined as UserDataType | null | undefined,
};

const RecruitReducer = (state = initialState, action: RecruitActionsType) => {
  switch (action.type) {
    case GET_CANDIDATES_DATA_SUCCESS:
      return {
        ...state,
        userData: action.payload,
      };
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
