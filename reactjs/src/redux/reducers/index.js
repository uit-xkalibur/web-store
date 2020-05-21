import { combineReducers } from 'redux';
import notifyReducer from './nofifyReducer';
import productReducer from './productReducer';

export default combineReducers({
  notificator: notifyReducer,
  products: productReducer,
});