export const SEARCH = 'SEARCH';
export const UPDATE_USERNAME = 'UPDATE_USERNAME';


export const updateUsername = username => {
    return {
        type: UPDATE_USERNAME,
        payload: username
    }
};

export const getUser = (username) => {
   return async (dispatch, getState) => {
      try {
         return  fetch(`https://api.github.com/users/${username}`)
            .then(response => response.json())
            .then(response => {
               console.log(response);
               return response;
                })
      } catch (e) {
         alert(e)
      }
   }
};
