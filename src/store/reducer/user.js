import * as type from '../types/user';

const defaultState = {
  currentUser: {},
  errors: '',
};

export default (state, action) => {
  if (!state) return defaultState;

  switch (action.type) {
    case type.SEARCH_USER: {
      return {
        ...state,
        currentUser: action.payload,
      };
    }
    case type.SEARCH_FAIL: {
      return {
        ...state,
        errors: action.payload,
      };
    }
    default:
      return state;
  }
};