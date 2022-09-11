import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';
import AuthReducer from './auth/reducer';
import RecruitReducer from './recruit/reducer';

const rootReducer = combineReducers({
  AuthReducer,
  RecruitReducer,
});

type RootReducerType = typeof rootReducer;
export type AppStateType = ReturnType<RootReducerType>;

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunkMiddleware)));

export type InferActionsTypes<T> = T extends { [keys: string]: (...args: never[]) => infer U } ? U : never;

export default store;
