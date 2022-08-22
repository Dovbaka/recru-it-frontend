import { RecruitActionsType } from './actions';
import {
  CLEAR_SEARCH_PARAMS,
} from './actionTypes';
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

    default:
      return state;
  }
};

export default RecruitReducer;
