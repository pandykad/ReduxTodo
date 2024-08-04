import React from 'react'
import { Input } from "@/components/ui/input"
import { Button } from '@/components/ui/button';
import { useDispatch } from 'react-redux';
import { removeTodo } from '@/features/todo/todoSlice';


function ListItem(props) {
    const {todo} = props;

    const dispatch = useDispatch()
    
    const deleteHandler = (e) => {
        e.preventDefault()
        dispatch(removeTodo(todo.id))
    }

    return (
        <div className='flex justify-between w-1/2'>
            <Input value={todo.text} className='m-2' disabled/>
            <Button className='m-2 bg-red-400 hover:bg-red-500' onClick={deleteHandler}>Delete</Button>
        </div>
    )
}

export default ListItem

