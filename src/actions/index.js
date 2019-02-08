export const fetchPosts = posts => ({
  type: 'FETCH_POSTS',
  posts
});

export const addNewPost = (title, url, tags, sub_tags = []) => {
  return (dispatch, getState) => {
    let headers = { 'Content-Type': 'application/json' };
    let body = JSON.stringify({
      title,
      url,
      tags,
      sub_tags,
      is_public: true
    });

    const token = getState().authentication.token;

    if (token) {
      headers['Authorization'] = `Token ${token}`;
    }

    return fetch(
      'https://cors-anywhere.herokuapp.com/https://newsflashback.herokuapp.com/api/post/create/',
      { headers, body, method: 'POST' }
    )
      .then(res => {
        if (res.status < 500) {
          return res.json().then(data => {
            return { status: res.status, data };
          });
        } else {
          console.log('Server Error!');
          throw res;
        }
      })
      .then(res => {
        if (res.status === 201) {
          dispatch({ type: 'ADD_NEW_POST', post: res.data });
          return res.data;
        } else if (res.status === 403 || res.status === 401) {
          dispatch({ type: 'ADD_NEW_POST_ERROR', data: res.data });
          throw res.data;
        } else {
          dispatch({ type: 'ADD_NEW_POST_FAILED', data: res.data });
          throw res.data;
        }
      });
  };
};

export const loadUser = () => {
  return (dispatch, getState) => {
    dispatch({ type: 'USER_LOADING' });

    const token = getState().authentication.token;

    let headers = {
      'Content-Type': 'application/json'
    };

    if (token) {
      headers['Authorization'] = `Token ${token}`;
    }
    return fetch(
      'https://cors-anywhere.herokuapp.com/https://newsflashback.herokuapp.com/api/auth/user/',
      {
        headers
      }
    )
      .then(res => {
        if (res.status < 500) {
          return res.json().then(data => {
            return { status: res.status, data };
          });
        } else {
          console.log('Server Error!');
          throw res;
        }
      })
      .then(res => {
        if (res.status === 200) {
          dispatch({ type: 'USER_LOADED', user: res.data });
          return res.data;
        } else if (res.status >= 400 && res.status < 500) {
          dispatch({ type: 'AUTHENTICATION_ERROR', data: res.data });
          throw res.data;
        }
      });
  };
};

export const login = (username, password) => {
  return (dispatch, getState) => {
    let headers = { 'Content-Type': 'application/json' };
    let body = JSON.stringify({ username, password });

    return fetch(
      'https://cors-anywhere.herokuapp.com/https://newsflashback.herokuapp.com/api/auth/login/',
      { headers, body, method: 'POST' }
    )
      .then(res => {
        if (res.status < 500) {
          return res.json().then(data => {
            return { status: res.status, data };
          });
        } else {
          console.log('Server Error!');
          throw res;
        }
      })
      .then(res => {
        if (res.status === 200) {
          dispatch({ type: 'LOGIN_SUCCESSFUL', data: res.data });
          return res.data;
        } else if (res.status === 403 || res.status === 401) {
          dispatch({ type: 'AUTHENTICATION_ERROR', data: res.data });
          throw res.data;
        } else {
          dispatch({ type: 'LOGIN_FAILED', data: res.data });
          throw res.data;
        }
      });
  };
};

export const logout = () => {
  return (dispatch, getState) => {
    let headers = { 'Content-Type': 'application/json' };

    return fetch(
      'https://cors-anywhere.herokuapp.com/https://newsflashback.herokuapp.com/api/auth/logout/',
      {
        headers,
        body: '',
        method: 'POST'
      }
    )
      .then(res => {
        if (res.status === 204) {
          return { status: res.status, data: {} };
        } else if (res.status < 500) {
          return res.json().then(data => {
            return { status: res.status, data };
          });
        } else {
          console.log('Server Error!');
          throw res;
        }
      })
      .then(res => {
        if (res.status === 204) {
          dispatch({ type: 'LOGOUT_SUCCESSFUL' });
          return res.data;
        } else if (res.status === 403 || res.status === 401) {
          dispatch({ type: 'AUTHENTICATION_ERROR', data: res.data });
          throw res.data;
        }
      });
  };
};

export const register = (first_name, last_name, email, username, password) => {
  return (dispatch, getState) => {
    let headers = { 'Content-Type': 'application/json' };
    let body = JSON.stringify({
      first_name,
      last_name,
      email,
      username,
      password
    });

    return fetch(
      'https://cors-anywhere.herokuapp.com/https://newsflashback.herokuapp.com/api/auth/register/',
      { headers, body, method: 'POST' }
    )
      .then(res => {
        if (res.status < 500) {
          return res.json().then(data => {
            return { status: res.status, data };
          });
        } else {
          console.log('Server Error!');
          throw res;
        }
      })
      .then(res => {
        if (res.status === 200) {
          dispatch({ type: 'REGISTRATION_SUCCESSFUL', data: res.data });
          return res.data;
        } else if (res.status === 403 || res.status === 401) {
          dispatch({ type: 'AUTHENTICATION_ERROR', data: res.data });
          throw res.data;
        } else {
          dispatch({ type: 'REGISTRATION_FAILED', data: res.data });
          throw res.data;
        }
      });
  };
};
