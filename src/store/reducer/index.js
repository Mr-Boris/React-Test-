import { combineReducers } from 'redux';

import repo from './user';
import user from './user';
import org from './user';

const rootReducer = combineReducers({
  org,
  user,
  repo,
});

export default rootReducer;
