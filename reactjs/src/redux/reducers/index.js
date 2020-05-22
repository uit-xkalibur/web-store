import { combineReducers } from 'redux';
import notifyReducer from './nofifyReducer';
import productReducer from './productReducer';
import basketReducer from './basketReducer';

export default combineReducers({
  notificator: notifyReducer,
  products: productReducer,
  basketState: basketReducer,
});