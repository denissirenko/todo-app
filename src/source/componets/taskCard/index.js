import React, { useState } from 'react';
import {useDispatch} from 'react-redux';
import { todosActions } from '../../actions';

// import {initialValues} from './initialValues';
import { validationSchema } from './validationSchema';
import { Formik } from 'formik';
//Form Elements
import { TextInput } from './formElements/textInput';
import { Textarea } from './formElements/textarea';
import { Deadline } from './formElements/deadline';
import { SubTask } from './formElements/subTask';
import { TagRadioButton } from './formElements/tagRadioButton';
import { ButtonCompleteTask } from './formElements/buttonCompleteTask';


import cx from 'classnames';

const tag = [
    {
        name: 'tag',
        value: 'Sketch'
    },
    {
        name: 'tag',
        value: 'Spotify'
    },
    {
        name: 'tag',
        value: 'Dribble'
    },
    {
        name: 'tag',
        value: 'Behance'
    },
    {
        name: 'tag',
        value: 'UX'
    }
];

export const TaskCard = (props) => {
    const dispatch = useDispatch();

    const SubTasksJSX = props.data.checklist.map((item, index)=>{
        return (
            <SubTask 
                key={index} 
                name = {`checklist.${index}`}
                value = {item.title} 
                completed = {item.completed}
            />
        )
    });

    const deleteTask = (hash) => {
        dispatch(todosActions.delete(hash));
    }

    const ButtonDeleteTaskJSX = props.hash && (
        <button 
            onClick={() => deleteTask(props.hash)}
            className="button-remove-task"
        />
    );

    const [selectedTag, setSelectedTag] = useState(props.selectedTag);

    const tagJSX = tag.map((item, index) => {
    
        const onSelectedTag = (index) => {
            setSelectedTag(index);
        }

        const tagCx = cx({
            tag: true,
            first: item.value === 'Sketch',
            second: item.value === 'Spotify',
            third: item.value === 'Dribble',
            fourth: item.value === 'Behance',
            fifth: item.value === 'UX',
            selected: index === selectedTag || item.value === selectedTag
        });
        return (
            <TagRadioButton
                className={tagCx} 
                key={index}
                funcOnSelectedTag={onSelectedTag}
                index={index}
                name = {item.name}
                value = {item.value}
                >
            </TagRadioButton>
        )
    });
    
    return (
        <div className="task-card">
            <Formik
                initialValues = {props.data}
                validationSchema= {validationSchema}
                onSubmit={(values) => {
                    if(props.hash) {
                        dispatch(todosActions.put(props.hash, values));
                        props.functionSetSelectedTask(null);
                    } else {
                        dispatch(todosActions.post(values));
                        dispatch(todosActions.visibleNewTask(false));
                    }
                }}
            >
                {({errors, submitForm, isSubmitting, dirty, handleReset, isValid, field}) => (
                    <>
                        <div className="head">
                            <ButtonCompleteTask
                                className="button-complete-task"
                                name="completed"
                                value={props.data.completed}
                            />
                            {ButtonDeleteTaskJSX}
                        </div>
                        <div className="content">
                            <TextInput
                                className="title"
                                type = "text"
                                name = "title"
                                placeholder = "Task title"
                            />
                            <Deadline 
                                name = "deadline"
                            />
                            <Textarea
                                name = "description"
                                placeholder = "Describe your event"
                            />

                            <div className="checklist">
                                <span className="label">Checklist</span>
                                <div className="sub-tasks">
                                    {SubTasksJSX}
                                </div>
                            </div>
                            <div className="tags">
                                { tagJSX }
                            </div>
                            <div className="errors">
                                { dirty && !isValid && (<p className="errorMessage"> { errors.title } </p>)}
                                { dirty && !isValid && (<p className="errorMessage"> { errors.tag } </p>)}
                                { dirty && !isValid && (<p className="errorMessage"> { errors.checklist } </p>)}
                            </div>
                            <div className="form-controls">
                                <button 
                                    className="button-reset-task"
                                    onClick={handleReset}
                                    disabled={!dirty || isSubmitting}
                                >Reset
                                </button>

                                {props.hash && <button
                                    className="button-save-task"
                                    onClick={submitForm}
                                    disabled={((!(isValid && dirty)) || isSubmitting)}
                                >
                                    Save
                                </button>}
                                {!props.hash && <button 
                                    type="submit"
                                    className="button-save-task"
                                    onClick={submitForm}
                                    disabled={((!(isValid && dirty)) || isSubmitting)}
                                > 
                                    Save
                                </button>}
                            </div>
                        </div>
                    </>
                )}
            </Formik>
        </div>
    )
}