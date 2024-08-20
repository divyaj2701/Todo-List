import "./App.css";
import React, { useState, useEffect } from "react";
import Header from "./MyComponents/Header";
import { AddTodo } from "./MyComponents/AddTodo";
import { Todos } from "./MyComponents/Todos"; //funtion of not default type
import { Footer } from "./MyComponents/Footer"; //funtion of not default type
import { About } from "./MyComponents/About";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  } else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }
  const onDelete = (todo) => {
    // console.log("i am on delete of todo", todo);
    setTodos(
      todos.filter((e) => {
        return e !== todo;
      })
    );
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  const addTodo = (title, desc) => {
    let sno;
    if(todos.length === 0){
      sno = 0;
    }
    else{
      sno = todos[todos.length - 1].sno + 1;
    }
    const newTodo = {
      sno: sno,
      title: title,
      desc: desc,
    };
    setTodos([...todos, newTodo]);
    // console.log(newTodo);
  };

  const [todos, setTodos] = useState(initTodo);
  //will automatically gets called if any change in todos
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <>
      <Router>
        <Header title="My Todos List" searchBar={false} />
        {/* My Todos List will be the title of HomePage */}
        {/* no search bar will be presnt if set false */}
        <Routes>
          <Route exact path="/" element={
                <>
                  <AddTodo addTodo={addTodo} />
                  <Todos todos={todos} onDelete={onDelete} />
                </>
          }/>
          <Route exact path="/about" element={<About/>}/>
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
