import axios from 'axios';

import * as userTypes from '../types/user';

export const searchRepo = (username) => async (dispatch) => {
  const response = await axios.get(`https://api.github.com/users/${username}/repos`);
  dispatch({
    type: userTypes.SEARCH_REPO,
    payload: response.data
  });
}
