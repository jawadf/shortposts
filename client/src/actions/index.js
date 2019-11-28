import posts from '../apis/posts';
import history from '../history';
import { 
  SIGN_IN,
  SIGN_OUT,
  CREATE_POST,
  FETCH_POSTS,
  FETCH_POST,
  DELETE_POST,
  EDIT_POST
} from './types';

export const signIn = (userId, userName) => {
  return {
    type: SIGN_IN,
    payload: [userId, userName]
  };
}; 

export const signOut = () => {
  return {
    type: SIGN_OUT
  };
};

//CREATE
export const createPost = formValues => async (dispatch, getState) => {
  const { userId, userName } = getState().auth;
  const response = await posts.post('/posts', {...formValues, userId, userName});

  dispatch({ type: CREATE_POST, payload: response.data });
  history.push('/');
};

//FETCH ALL
export const fetchPosts = () => async dispatch => {
  const response = await posts.get('/posts');

  dispatch({ type: FETCH_POSTS, payload: response.data });
};

//FETCH ONE
export const fetchPost = id => async dispatch => { 
  const response = await posts.get(`/posts/${id}`);

  dispatch({type: FETCH_POST, payload: response.data });
};

//EDIT
export const editPost = (id, formValues) => async dispatch => {
  const response = await posts.patch(`/posts/${id}`, formValues);

  dispatch({ type: EDIT_POST, payload: response.data });
  history.push('/');
};

//DELETE
export const deletePost = id => async dispatch => {
  await posts.delete(`/posts/${id}`);

  dispatch({ type: DELETE_POST, payload: id });
  history.push('/');
};