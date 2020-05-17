import { combineReducers } from 'redux';
import notifyReducer from './nofifyReducer';

export default combineReducers({
  notificator: notifyReducer,
});