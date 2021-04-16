import React from 'react';
import {Field} from 'formik';

export const TagRadioButton = ({label, ...props})=>{
    return (
        <Field name={props.name}>
            {({field, form}) => {
                return (
                    <span 
                        className={props.className}
                        onClick= {() => {
                            form.setFieldValue(props.name, props.value);
                            props.funcOnSelectedTag(props.index);
                        }}
                    >
                        { props.value }
                    </span>
                )
            }}
        </Field>
    )
}
