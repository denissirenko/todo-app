export const initialValues = {
    completed: false,
    title: '',
    deadline: new Date (new Date().setHours(23,59,59,999)),
    description: '',
    checklist: [
        {
            completed: true,
            title: "sub-task 1",
        },
        {
            completed: false,
            title: "sub-task 2",
        },
        {
            completed: false,
            title: "sub-task 3",
        },
    ],
    tag: ''
}


// {
//     "completed":false,
//     "title":"test-1",
//     "description":"",
//     "tag":"Spotify",
//     "checklist":[
//         {"title":"yjuyjtujk","completed":true},
//         {"title":"jujuyjkyuk","completed":false}
//     ],
//     "deadline":"2021-01-20T23:59:59+02:00"
// }
