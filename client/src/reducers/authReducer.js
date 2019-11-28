import { SIGN_IN, SIGN_OUT } from '../actions/types';

const INITIAL_STATE = {
  isSignedIn: null,
  userId: null,
  userName: null
};

export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case SIGN_IN:
      return {...state, isSignedIn: true, userId: action.payload[0], userName: action.payload[1] };
    case SIGN_OUT:
      return {...state, isSignedIn: false, userId: action.payload };
    default:
      return state;
  }
};
