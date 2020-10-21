import { SET_NAME } from '../actionTypes';

const initialState = {
    name: "Guster",
}

const nameReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_NAME: {
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

export default nameReducer;