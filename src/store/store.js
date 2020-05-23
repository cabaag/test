import { combineReducers, createStore } from 'redux';
import loaderReducer from './reducers/loader.reducers';

const reducers = combineReducers({ loader: loaderReducer });

export default createStore(reducers);
