export const postsReducer = (state = [], action) => {
  switch (action.type) {
    case 'FETCH_POSTS':
      return [...action.posts];
    case 'ADD_NEW_POST':
      return [...action.posts, action.post];
    default:
      return state;
  }
};
