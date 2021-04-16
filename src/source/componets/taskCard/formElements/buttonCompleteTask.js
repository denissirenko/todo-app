import React, { useState } from 'react';
import {Field} from 'formik';

export const ButtonCompleteTask = ({label, ...props})=>{
    const [isCliked, setIsCliked] = useState(false);
    return (
        <Field name={props.name}>
            {({field, form}) => {
                return (
                    <button 
                        onClick={()=>{ 
                            if (isCliked === false) {
                                form.setFieldValue(props.name, !props.value)
                                setIsCliked(true);
                            } else {
                                form.setFieldValue(props.name, props.value)
                                setIsCliked(false);
                            }
                        }}
                        className={props.className}
                    >
                        Mark as complete
                    </button> 
                )
            }}
        </Field>
    )
}

