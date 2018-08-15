import { createStore } from 'redux';
import todoApp from './Reducer';

const store = createStore(todoApp, window.STATE_FROM_SERVER)

export default store;