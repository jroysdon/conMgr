import { combineReducers } from 'redux';
import venuesReducer from '../store/venues';

const rootReducer = combineReducers({
  venues: venuesReducer

});

export default rootReducer;
