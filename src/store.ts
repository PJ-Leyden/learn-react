import { createStore, combineReducers } from 'redux';
import { todos } from './todos/reducers';

const reducers = {
    todos
};

const rootreducer = combineReducers(reducers);

export const configureStore = () => createStore(rootreducer);