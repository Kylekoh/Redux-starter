import { handleActions, createAction } from 'redux-actions';
import { Map } from 'immutable';

// Set action type
const INCREMEMT = 'INCREMENT';
const DECREMENT = 'DECREMENT';

// Set action creator
export const increment = createAction(INCREMEMT);
export const decrement = createAction(DECREMENT);

// Set reducer function
export default handleActions({
    [INCREMEMT]: (state, action) => state + 1,
    [DECREMENT]: (state, action) => state - 1
}, 1)