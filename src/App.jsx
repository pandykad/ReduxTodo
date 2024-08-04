import React from 'react'
import AddTodo from './custom-components/AddTodo'
import ShowTodo from './custom-components/ShowTodo'


function App() {

  return (
    <div className='flex justify-center items-center min-h-screen bg-slate-100'>
      <div className='p-8 w-9/12 bg-white rounded shadow h-[80vh] overflow-y-auto'>
      <div className='w-full'>
        <h1 className='text-4xl font-bold bg-blue-200 p-4 rounded-md mb-4 text-center'>
            <span className='underline decoration-indigo-500'>Pratik's Todo</span>
            <span> </span> 
            <span className='underline decoration-pink-500'>App</span>!
          </h1>
        </div>
        <AddTodo />
        <ShowTodo />
      </div>
    </div>
  )
}

export default App
