import { combineReducers } from 'redux'
import { UPDATE_USERNAME, SEARCH } from '../actions/user'

const user = (state = {}, action) => {
    switch (action.type) {
        case SEARCH: 
            return action.payload
        case UPDATE_USERNAME:
            return { ...state, username: action.payload}
        default:
            return state
    }
};

const rootReducer = combineReducers({
    user
});

export default rootReducer
