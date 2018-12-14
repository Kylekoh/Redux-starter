import { pender } from 'redux-pender';
import { createAction, handleActions } from 'redux-actions';
import axios from 'axios';

function getPostAPI(postId) {
    return axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`);
}

// Set Action type
const GET_POST = 'GET_POST';

// Set Action creator
export const getPost = createAction(GET_POST, getPostAPI)

// Set initial state
const initialState = {
    data : {
        title: '',
        body: ''
    }
}

// Set reducer function
export default handleActions({
    ...pender({
        type: GET_POST,
        onSuccess: (state, action) => {
            const { title, body } = action.payload.data;
            return {
                data: {
                    title,
                    body
                }
            }
        },
        onCancel: (state, action) => {
            return {
                data: {
                    title: '취소됨',
                    body: '취소됨'
                }
            }
        }
    })
}, initialState);