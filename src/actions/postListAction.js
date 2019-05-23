import { FETCH_POSTS, GET_BASIC_DOMAIN, VIEW_POST } from '../constents';
import axios from 'axios';

export const featchPostList = (argPass) => async dispatch => {
    const response = await axios.get(GET_BASIC_DOMAIN + argPass);
    dispatch({
        type: FETCH_POSTS,
        payload: response.data
    });
};
export const createPost = (url, values, callBack) => async () => {
    await axios.post(GET_BASIC_DOMAIN + url, 
        values, {
            "Content-type": "application/json; charset=UTF-8"
          }
        ).then(
        res => callBack(res),
        err => callBack(err)
    )
    // console.log(response);
    // dispatch({
    //     type: NEW_POST,
    //     payload: response
    // });
}
export const featchPost = (argPass) => async dispatch => {
    const response = await axios.get(GET_BASIC_DOMAIN + argPass);
    dispatch({
        type: VIEW_POST,
        payload: response.data
    });
};