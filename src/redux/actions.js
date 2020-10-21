import { SET_ACTIVITY, SET_NAME } from './actionTypes';

export const setActivity = (activity) => {
    return {
        type: SET_ACTIVITY,
        payload: { activity },
    }
}

export const setName = (name) => {
    return {
        type: SET_NAME,
        payload: { name },
    }
}