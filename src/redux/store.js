import { createStore, applyMiddleware } from 'redux';
import { thunk } from 'redux-thunk'; // Fixing the named import
import rootReducer from './reducers';

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;