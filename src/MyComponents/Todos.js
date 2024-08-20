// using arrow function(rafc)
import React from 'react'
import { TodoItem } from './TodoItem'

export const Todos = (props) => {
  let styles={
      minHeight: "70vh",
      // height: "30.5vh",
      margin: "40px auto"
  }
  return (
    <div className="container" style={styles}>
      <h3 className='text-center my-3'>Todos List</h3>
      {props.todos.length === 0 ? "No Todos Available" : 
      props.todos.map((todo) => {
          return(
            <TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete}/>
          )
      })
    }
      {/* while rendering the UI using map we have to send a uniw=que key */}
      {/* <TodoItem todo = {props.todos[0]} />  */}
    </div>
  )
}
