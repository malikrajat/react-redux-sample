import { combineReducers } from 'redux';
import postListReducer from './postListReducer';
import postViewReducer from './postViewReducer';
import { reducer as formReducer } from 'redux-form';

export default combineReducers({
    postList: postListReducer,
    form: formReducer,
    postView: postViewReducer
});