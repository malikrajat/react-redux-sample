import { FETCH_POSTS } from '../constents';
export default (state = [], action) => {
    switch (action.type) {
        case FETCH_POSTS:
            return [...state, ...action.payload]
        default:
            return state
    };
};