import { ADD_CAT, SET_ACTIVITY } from './actionTypes';

export const setActivity = (id, activity) => {
    return {
        type: SET_ACTIVITY,
        payload: { id, activity },
    }
}

export const addCat = (name) => {
    return {
        type: ADD_CAT,
        payload: {
            id: Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15),
            name
        }
    }
}