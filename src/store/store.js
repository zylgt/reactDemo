import { createStore } from 'redux';
import finalReducer from './reducers';
const store = createStore(finalReducer);
export default store;