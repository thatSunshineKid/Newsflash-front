export const trendingReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TRENDING_STORY':
      return [...action.topStory];
    default:
      return state;
  }
};
