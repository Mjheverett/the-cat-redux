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
    }
};

const catReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_CAT: {
            const { id, name, activity } = action.payload;
            return {
                cats: {
                ...state.cats,
                [id]: { name, activity },
                },
            };
        }
        case SET_ACTIVITY: {
            const { id, activity } = action.payload;
            const name = state.cats[id].name;
            return {
                cats: {
                ...state.cats,
                [id]: { name, activity },
                },
            };
        }
        default:
            return state;
    }
}

export default catReducer;