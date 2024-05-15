import React from 'react'
import Task2 from '../Task2'
import Task4 from './Task4'

const Task42 = () => {
  return (
    <div>
      <Task2 fallback={"Error Loading Page"}>
        <Task4 />
      </Task2>
    </div>
  )
}

export default Task42
