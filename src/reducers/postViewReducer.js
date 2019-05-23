import { VIEW_POST } from '../constents';
export default (state = [], action) => {
    switch (action.type) {
        case VIEW_POST:
            return action.payload;
        default:
            return state
    };
};