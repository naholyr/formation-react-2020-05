import { createStore, applyMiddleware } from 'redux';
import { reducer, initialState } from './reducer';
import { loginPersistence } from './redux-middlewares';
import { init } from './actions';

// Middlewares
const storeEnhancer = applyMiddleware(loginPersistence);

export const store = createStore(reducer, initialState, storeEnhancer);

// Initialization action
store.dispatch(init());
