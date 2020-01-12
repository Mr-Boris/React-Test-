import axios from 'axios';

import * as userTypes from '../types/user';

export const searchUser = (username) => async (dispatch) => {
  const response = await axios.get(`https://api.github.com/users/${username}`);
  dispatch({
    type: userTypes.SEARCH_USER,
    payload: response.data
  });
}
