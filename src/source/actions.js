import {api} from './api/index';

import {types} from './types';

export const todosActions = Object.freeze({
    fill: (payload)=>{
        return {
            type: types.TODOS_FILL,
            payload
        }
    },
    visibleNewTask: (payload)=>{
        return {
            type: types.SETVISIBLE_NEW_TASK_CARD,
            payload
        }
    },

    // Async
    fetchAsync: () => async(dispatch) => {
        const response = await api.todos.fetch();
        const {data} = await response.json();
        dispatch(todosActions.fill(data));
    },
    post: (data) => async(dispatch) => {
        const response = await api.todos.post(data);
        if(response.status === 201) {
            await dispatch(todosActions.fetchAsync());
        }
    },
    delete: (hash) => async(dispatch) => {
        await api.todos.delete(hash);
        await dispatch(todosActions.fetchAsync());
    },
    put: (hash, data) => async(dispatch) => {
        await api.todos.put(hash, data);
        await dispatch(todosActions.fetchAsync());
    }
})
