import { createStore } from 'redux';

const intial_state = {
    user: {},
    randomUsers: [],
}

const reducer = (state, action) => {
    switch (action.type) {
        case 'GET_RANDOM_USERS':
            return {
                ...state,
                randomUsers: action.data,
            };
        case 'LOGIN':
            return {
                ...state,
                user: action.data,
            };
        case 'LOGOUT':
            return {
                user: {},
                randomUsers: [],
            };
        default:
            return state;
    }
};

export default createStore(reducer, intial_state);