import { ADD_CAT, SET_ACTIVITY } from '../actionTypes';

const initialState = {
    cats: {
        1001: {
            name: 'Beans',
            activity: 'meowing',
        },
        1002: {
            name: 'Bandit',
            activity: 'eating',
        },
    },
};

const catReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_CAT: {
            const { id, name } = action.payload;
            return {
                ...state,
                [id]: {
                    name,
                    activity: 'napping',
                },
            };
        }
        case SET_ACTIVITY: {
            const { id, activity } = action.payload;
            return {
                ...state,
                [id]: {
                    activity,
                }
            }
        }
        default:
            return state;
    }
}

export default catReducer;