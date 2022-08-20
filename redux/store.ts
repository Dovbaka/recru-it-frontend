import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';

const rootReducer = combineReducers({

});

type RootReducerType = typeof rootReducer;
export type AppStateType = ReturnType<RootReducerType>;

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunkMiddleware)));

export default store;
