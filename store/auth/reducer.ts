import { AuthActionsType } from './actions';
import jwt_decode from 'jwt-decode';
import {CLEAR_ERRORS, INITIALIZE_APP, LOG_OUT, LOGIN_SUCCESS, SET_AUTH} from './actionTypes';
import { AuthResponse, DecodedJwt } from '../../types/types';

const initialState = {
  initialized: false,
  token: {} as AuthResponse,
  isAuth: false,
  isPending: false,
  errorMessage: '',
  userId: null as null | number,
};

const AuthReducer = (state = initialState, action: AuthActionsType) => {
  switch (action.type) {
    case INITIALIZE_APP:
      return {
        ...state,
        initialized: true,
      };
    case SET_AUTH: {
      const decodedToken = jwt_decode<DecodedJwt>(action.payload.access);
      const userId = decodedToken?.user_id;
      return {
        ...state,
        isAuth: true,
        token: action.payload,
        userId,
      };
    }
    case LOGIN_SUCCESS: {
      const decodedToken = jwt_decode<DecodedJwt>(action.payload.access);
      const userId = decodedToken?.user_id;
      return {
        ...state,
        token: action.payload,
        isAuth: true,
        userId: userId,
        codeError: '',
      };
    }
    case CLEAR_ERRORS: {
      return {
        ...state,
        errorMessage: '',
      };
    }
    case LOG_OUT: {
      localStorage.removeItem('userInfo');
      return {
        ...state,
        isAuth: false,
      };
    }
    default:
      return state;
  }
};

export default AuthReducer;
