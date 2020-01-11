import { combineReducers } from 'redux'
import { SEARCH } from '../actions/user'

const user = (state = {}, action) => {
    switch (action.type) {
        case SEARCH: 
            return {
               ...state,
               user: action.payload
            }
        default:
            return state
    }
};

const rootReducer = combineReducers({
    user
});

export default rootReducer
