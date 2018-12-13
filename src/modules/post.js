import { handleActions, createAction } from 'redux-actions'

// set type of action 
const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';

// set action creator fuction
export const increment = createAction(INCREMENT);
export const decrement = createAction(DECREMENT);

// set initial state
const initialState = {
    value : 1
}

// set reducer function
export default handleActions({
    [INCREMENT]: (state, action) => state + 1,
    [DECREMENT]: (state, action) => state - 1
}, initialState)