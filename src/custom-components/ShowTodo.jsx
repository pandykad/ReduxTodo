import ListItem from '@/components/ui/small-components/ListItem'
import React from 'react'
import { useSelector } from 'react-redux' 

function ShowTodo() {

    const todos = useSelector(state => state.todos)

    console.log(todos)

    

  return (
    <>
        <div className='flex flex-col justify-center items-center w-full'>
            <div>Below are your previous todos:</div>
            {todos.map((todo) => (
                <ListItem key={todo.id} todo={todo}/>
            ))}
        </div>
    </>
  )
}  

export default ShowTodo