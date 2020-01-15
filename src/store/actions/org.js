import axios from 'axios';

import * as userTypes from '../types/user';

export const searchOrg = (username) => async (dispatch) => {
  const response = await axios.get(`https://api.github.com/users/${username}/orgs`);
  dispatch({
    type: userTypes.SEARCH_ORG,
    payload: response.data
  });
}
