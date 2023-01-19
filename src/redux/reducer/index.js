import {combineReducers} from 'redux';
import {globalReducer} from './global';
import {locationReducer} from './location';
import {userReducer} from './user';
import {reportReducer} from './report';

const reducer = combineReducers({
  globalReducer,
  locationReducer,
  userReducer,
  reportReducer,
});

export default reducer;
