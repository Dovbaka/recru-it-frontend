import { AuthActionsType } from './actions';
import jwt_decode from 'jwt-decode';
import {
  CLEAR_ERRORS,
  INITIALIZE_APP,
  LOG_OUT,
  LOGIN_FAILURE,
  LOGIN_START,
  LOGIN_SUCCESS,
  SET_AUTH,
} from './actionTypes';
import { AuthResponse, DecodedJwt } from '../../interfaces/AuthInterface';

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
    case LOGIN_START: {
      return {
        ...state,
        isPending: true,
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
        isPending: false,
      };
    }
    case LOGIN_FAILURE: {
      return {
        ...state,
        errorMessage: action.payload,
        isPending: false,
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
