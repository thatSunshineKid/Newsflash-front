import { fetchPosts } from '../actions';

export const fetchTestPosts = () => {
  return dispatch => {
    let headers = {
      'Content-Type': 'application/json'
    };
    return fetch(
      'https://cors-anywhere.herokuapp.com/https://newsflashback.herokuapp.com/backend/test/',
      { headers }
    )
      .then(res => res.json())
      .then(posts => {
        return dispatch(fetchPosts(posts));
      });
  };
};
