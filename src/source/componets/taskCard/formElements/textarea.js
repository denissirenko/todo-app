import React from 'react';
import {useField} from 'formik';

export const Textarea = ({label, ...props})=>{

    const [field] = useField({...props});
    
    return (
        <div className="description">
            <span className="label">Description</span>
            <textarea className="text" {...field} {...props}></textarea>
        </div>
    )
}