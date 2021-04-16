import {useState } from 'react';
import { useDispatch, useSelector} from 'react-redux';

import { todosActions } from '../actions'

export const useTaskManager = () => {
    const dispatch = useDispatch();

    const [selectedTask, setSelectedTask] = useState(null);

    const {
        valueVisibleNewTaskCard,
    } = useSelector((state)=>state.visibleNewTaskCard);

    const openNewTask = () => {
        dispatch(todosActions.visibleNewTask(true));
        if (selectedTask !== null) {
            setSelectedTask(null);
        }
    }

    const onSelectedTask = (index) => {
        dispatch(todosActions.visibleNewTask(false));
        setSelectedTask(index);
    }

    return {
        valueVisibleNewTaskCard,
        openNewTask,
        selectedTask,
        onSelectedTask,
        setSelectedTask
    }
}