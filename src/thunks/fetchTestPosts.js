import { fetchPosts } from '../actions';

export const fetchTestPosts = () => {
  return async dispatch => {
    const url =
      'https://cors-anywhere.herokuapp.com/https://newsflashback.herokuapp.com/backend/test/';

    let headers = {
      'Content-Type': 'application/json'
    };

    const response = await fetch(url, { headers });

    const posts = await response.json();

    return dispatch(fetchPosts(posts));
  };
};
