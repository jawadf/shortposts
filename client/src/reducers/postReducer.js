import _ from 'lodash';
import {
  CREATE_POST,
  FETCH_POSTS,
  FETCH_POST,
  DELETE_POST,
  EDIT_POST
} from '../actions/types';

export default (state = {}, action) => {
  switch(action.type) {
    case FETCH_POSTS:
      return {...state, ..._.mapKeys(action.payload, 'id')};
    case CREATE_POST:
      return {...state, [action.payload.id]: action.payload }; // Dynamic property key OR Key interpolation syntax
    case EDIT_POST:
      return {...state, [action.payload.id]: action.payload };
    case FETCH_POST:
      return {...state, [action.payload.id]: action.payload };
    case DELETE_POST:
      return _.omit(state, action.payload);
    default:
      return state;
  }
}