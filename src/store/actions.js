import { GET_POSTS } from './types';

// eslint-disable-next-line import/prefer-default-export
export const fetchPosts = () => (dispatch) => {
  fetch('https://jsonplaceholder.typicode.com/posts')
    .then((response) => response.json())
    .then((posts) =>
      dispatch({
        type: GET_POSTS,
        payload: posts,
      })
    );
};
