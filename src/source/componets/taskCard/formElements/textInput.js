import React from 'react';
import {useField} from 'formik';

export const TextInput = ({label, ...props})=>{

    const [field] = useField({...props});
    return(
        <>
            <input className="text-input" {...field} {...props}></input>
        </>
    )
}
