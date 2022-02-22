import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { persistStore } from 'redux-persist'
import rootReducer from './root-reducer';

const middleware = [thunk];

const initialState = {}

export const store = createStore(rootReducer, initialState, composeWithDevTools(applyMiddleware(...middleware)));

export const persistor = persistStore(store)