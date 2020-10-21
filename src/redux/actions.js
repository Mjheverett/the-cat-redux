import { ACTION_NAP, ACTION_EAT, ACTION_PLAY, UPDATE_NAME } from './actionTypes';

export const nap = () => {
    return {
        type: ACTION_NAP
    }
}

export const eat = () => {
    return {
        type: ACTION_EAT
    }
}

export const play = () => {
    return {
        type: ACTION_PLAY
    }
}

export const newName = (name) => {
    return {
        type: UPDATE_NAME,
        payload: { name },
    }
}