import { ACTION_NAP, ACTION_EAT, ACTION_PLAY, UPDATE_NAME } from '../actionTypes';

const initialState = {
    name: "Guster",
    activity: "napping"
}

const activityReducer = (state = initialState, action) => {
    switch (action.type) {
        case ACTION_NAP: {
            return {
                ...state,
                activity: "napping",
            };
        }
        case ACTION_EAT: {
            return {
                ...state,
                activity: "eating",
            };
        }
        case ACTION_PLAY: {
            return {
                ...state,
                activity: "playing",
            };
        }
        case UPDATE_NAME: {
            const { name } = action.payload;
            return {
                ...state,
                name: name
            }
        }
        default:
            return state;
    }
}

export default activityReducer;