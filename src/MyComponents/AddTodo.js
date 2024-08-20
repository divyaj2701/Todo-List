import React, { useState } from "react";

export const AddTodo = (props) => {

    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");

    const submit = (e) => {
        e.preventDefault();
        if(!title || !desc){
            alert("Title or Description cannot be blank ")
        }
        else{
            props.addTodo(title,desc);
            setTitle("");
            setDesc("");
        }
    }
    let style = {
        visibility: "hidden"
    }

    let height = {
        height: "2rem",
        marginTop: "20px"
    }

    return (
        <div className="container" style={height}>
            <div className="option text-center">
            <button className="btn btn-primary btn-sm" onClick={()=>{
                document.querySelector("form").style.visibility = 'visible';
                document.querySelector(".container").style.height = 'auto';
            }}>Add a Todo</button>
            </div>
            <form onSubmit={submit} style={style}>
                <div classNameName="mb-3">
                    <label htmlFor="title" className="form-label">
                        Todo Title
                    </label>
                    <input
                        type="text"
                        value={title} onChange={(e)=>setTitle(e.target.value)} 
                        className="form-control"
                        id="title"
                        aria-describedby="emailHelp"
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="desc" className="form-label">
                        Todo Description
                    </label>
                    <input type="text" value={desc} onChange={(e)=>setDesc(e.target.value)} className="form-control" id="desc" />
                </div>
                <button type="submit" className="btn btn-success" onClick={()=>{
                    document.querySelector("form").style.visibility = 'hidden';
                    document.querySelector(".container").style.height = '2rem';
                }}>
                    Add Todo
                </button>
            </form>
        </div>
    );
};
