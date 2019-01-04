import { combineReducers } from 'redux';
import { trendingReducer } from './trendingReducer';

const rootReducer = combineReducers({
  topStory: trendingReducer
});

export default rootReducer;
