import React, { useState } from 'react'
import { Input } from "@/components/ui/input"
import { useDispatch } from 'react-redux'
import { addTodo } from '../features/todo/todoSlice'
import { Button } from "@/components/ui/button"


function AddTodo() {

    const [input, setInput] = useState('')
    const dispatch = useDispatch()

    const addTodoHandler = (e) => {
      e.preventDefault()
      dispatch(addTodo(input))
      setInput('')
    }

  return (
    <>
        <div  className='flex justify-between p-10'>
            <Input value={input} onChange={(e) => setInput(e.target.value)} className='mr-5' type="text" placeholder="Your next todo goes here"/>
            <Button onClick={addTodoHandler} className='ml-5 transition bg-green-400 hover:scale-110 hover:bg-green-500 hover:duration-300 hover:animate-none' disabled={!input.trim()}>Add</Button>
        </div>
    </>
  )
}

export default AddTodo