import * as type from '../types/user';

const defaultState = {
  errors: '',
  currentUser: {},
  currentOrgs: {},
  currentRepos: {},
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
    case type.SEARCH_ORG: {
       return {
          ...state,
          currentOrgs: action.payload,
       };
    }
    case type.SEARCH_REPO: {
       return {
          ...state,
          currentRepos: action.payload,
       };
    }
    default:
      return state;
  }
};
