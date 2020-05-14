import { createStore, applyMiddleware, compose } from 'redux';
import { reducer, initialState } from './reducer';
import { loginPersistence } from './redux-middlewares';
import { init } from './actions';
import thunkMiddleware from 'redux-thunk';

// Redux devtools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// Middlewares
const storeEnhancer = composeEnhancers(
  applyMiddleware(loginPersistence, thunkMiddleware)
);

// Store initialization
export const store = createStore(reducer, initialState, storeEnhancer);

// Initialization action
store.dispatch(init());
