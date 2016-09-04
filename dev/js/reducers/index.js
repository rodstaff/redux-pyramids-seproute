import {combineReducers} from 'redux'
import TweetsReducer from './tweetsReducer'
import UserReducer from './userReducer'

const allReducers = combineReducers({
  tweets:  TweetsReducer,
  user:  UserReducer
});
export default allReducers;