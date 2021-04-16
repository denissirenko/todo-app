import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {todosActions} from '../actions';


export const useTodosFetch = ()=>{
    const dispatch = useDispatch();

    useEffect(() =>{
        dispatch(todosActions.fetchAsync());
    }, [dispatch])

    const {
        data,
    } = useSelector((state)=>state.todos);

    return {
        data,
    }
}
