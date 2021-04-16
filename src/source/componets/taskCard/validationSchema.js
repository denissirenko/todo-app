import * as Yup from 'yup';

export const validationSchema = Yup.object().shape({
    title: Yup.string().min(3, 'Too Short!').required('Task title field is required'),
    deadline: Yup.string(),
    description: Yup.string(),
    tag: Yup.string().required('Tag field is required')
})
