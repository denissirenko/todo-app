import React from 'react';
import {Field} from 'formik';

import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

export const Deadline = ({label, ...props})=>{
    // const [field] = useField({...props});
    return (
        <Field name={props.name}>
            {({field, form}) => {
                return (
                    <div className="deadline">
                        <span className="label">Due to</span>
                        <span className="date">
                            <DatePicker 
                                dateFormat="MMMM dd, yyyy"
                                selected={new Date(field.value)}
                                onChange={date => form.setFieldValue(props.name, new Date(date).toISOString())}
                                minDate={new Date()} 
                            />
                        </span>
                    </div>
                )
            }}
        </Field>
    )
}