import {root} from './config';

export const api = Object.freeze({
    todos: {
        fetch: ()=>{
            return fetch(`${root}/todos/`, {
                method: 'GET',
                headers: {
                    "x-user": "sirenko"
                },
            })
        },
        post: (data)=>{
            return fetch(`${root}/todos/`, {
                method: 'post',
                body: JSON.stringify(data),
                headers: {
                    "x-user": "sirenko",
                    'content-type': 'application/json'
                },
            })
        },
        delete: (hash) => {
            return fetch(`${root}/todos/${hash}`, {
                method: 'DELETE',
                headers: {
                    "x-user": "sirenko"
                },
            })
        },
        put: (hash, data) => {
            delete data.hash;
            delete data.created;
            return fetch(`${root}/todos/${hash}`, {
                method: 'PUT',
                body: JSON.stringify(data),
                headers: {
                    "x-user": "sirenko",
                    'content-type': 'application/json'
                },
            })
        }
    } 
})

