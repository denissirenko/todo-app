import React from 'react';
//hooks
import { useTodosFetch } from './hooks/useTodosFetch';
import { useTaskManager } from './hooks/useTaskManager';
// initial values for formik
import {initialValues} from './componets/taskCard/initialValues';

// components
import { TaskCard } from './componets/taskCard'

import './styles/index.scss';

import cx from 'classnames';

export const Source = () => {
  const { data } = useTodosFetch();
  const { openNewTask, valueVisibleNewTaskCard, selectedTask, onSelectedTask, setSelectedTask } = useTaskManager();


  const listCx = cx({
    list: true,
    empty: data === null || data.length === 0,
  })

  const selectedTaskCardJSX = data && data.length !== 0 && data.map( (item, index) => {
    const { hash, tag } = item;
    return (
      index === selectedTask ? <TaskCard key={hash} data={item} hash={ hash } selectedTag={tag} functionSetSelectedTask={setSelectedTask} /> : null
    )
  })
  
  const listTodoJSX = data && data.length !== 0 && data.map( (item, index) => {
    const { title, deadline, tag, hash, completed } = item;

    const taskCx = cx({
      task: true,
      completed: completed,
      selected: index === selectedTask,
    })

    const tagCx = cx({
      tag: true,
      first: tag === 'Sketch',
      second: tag === 'Spotify',
      third: tag === 'Dribble',
      fourth: tag === 'Behance',
      fifth: tag === 'UX',
    });

    return (
      <div 
        className={taskCx} 
        key={hash}
        onClick={() => onSelectedTask(index)}
      >
        <span className="title">{title}</span>
        <div className="meta">
          <span className="deadline">{new Date(deadline).toISOString().substring(0, 10)}</span>
          <span className={tagCx}>{tag}</span>
        </div>
      </div>
    )
  })

  return (
    <>
      <main>
        <div className="controls">
          <button 
            onClick={ openNewTask }
            className="button-create-task">New Task</button>
        </div>
        <div className="wrap">
          <div className={listCx}>
            <div className="tasks">
              {listTodoJSX}
            </div>
          </div>

          { valueVisibleNewTaskCard && <TaskCard data={initialValues} selectedTag={null} /> }

          {selectedTaskCardJSX}
         
        </div>
      </main>
      <footer>
        <span>© 2019 Lectrum LLC - All Rights Reserved.</span>
      </footer>
    </>
  )
};
