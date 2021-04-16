import { combineReducers } from 'redux';

import { todosReducer as todos } from '../reducer';

import { visibleNewTaskCardReducer as visibleNewTaskCard } from '../reducer';

export const rootReducer = combineReducers({
    todos,
    visibleNewTaskCard
});