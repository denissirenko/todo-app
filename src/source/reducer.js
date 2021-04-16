import {types} from './types';

const initialState = {
    data: null,
};

export const todosReducer = (state = initialState, {type, payload}) => {
    switch(type) {
        case types.TODOS_FILL:
            return {
                ...state,
                data: payload
            };

        default: 
            return state;
    }
}

const initialVisibleNewTaskCard = {
    valueVisibleNewTaskCard: false,
};

export const visibleNewTaskCardReducer = (state = initialVisibleNewTaskCard, {type, payload}) => {
    switch(type) {
        case types.SETVISIBLE_NEW_TASK_CARD:
            return {
                ...state,
                valueVisibleNewTaskCard: payload
            };

        default: 
            return state;
    }
}
