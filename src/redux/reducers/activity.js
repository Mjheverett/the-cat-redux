import { SET_ACTIVITY } from '../actionTypes';

const initialState = "napping";

const activityReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_ACTIVITY: {
            const { activity } = action.payload;
            return activity;
        }
        default:
            return state;
    }
}

export default activityReducer;