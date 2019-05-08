import { combineReducers } from 'redux';
import setInitialData from './setData';

export default combineReducers({
  data: setInitialData
});
