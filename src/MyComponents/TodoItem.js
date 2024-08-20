import React from 'react'

export const TodoItem = (props) => {
  let style = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
  }
  return (
    <>
    <div style={style}>
      <div className="contain">
      <h4>{props.todo.title}</h4>
      <p>{props.todo.desc}</p> 
      </div>
      <div className="btn"><button className="btn btn-sm btn-danger" onClick={()=> {props.onDelete(props.todo)}}>delete</button> 
      {/* fun => funtion is passes and fun() => function is called */}
      {/* above onDelete() is passes using arrow funtion coz if not it will get 
      automatically called at time of rendering */}</div>
    </div>
    <hr />
    </>
  )
}
