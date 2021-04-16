import React from 'react';
import {Field} from "formik";

import cx from 'classnames';

export const SubTask = (props) => {
    
    const {completed, value} = props;

    const subTaskCx = cx({
        'sub-task': true,
        completed: completed,
        incompleted: !completed
    });
  
    return (
        <Field name="checklist">
            {({field, form}) => {
                return (
                    <div className={subTaskCx}>
                        <input
                            type = "text"
                            placeholder="add sub-task"
                            // value={value}
                            onChange={(e) => {
                                form.setFieldValue("checklist", e.target.value);
                            }}
                        />
                    </div>
                )
            }}
        </Field>
    );
};