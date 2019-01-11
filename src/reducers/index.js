import { combineReducers } from 'redux';
import { postsReducer } from './postsReducer';
import { authenticationReducer } from './authenticationReducer';

const rootReducer = combineReducers({
  posts: postsReducer,
  authentication: authenticationReducer
});

export default rootReducer;
