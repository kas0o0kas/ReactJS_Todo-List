import { useState, useEffect } from "react";
import Control from "./Control";
import Form from "./Form";
import TodoList from "./TodoList";

function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodo] = useState([]);
  const [status, setStatus] = useState("All");
  const [filterTodo, setFilterTodo] = useState([]);

  useEffect (() => {
    getFromLocal();
  }, []);

  useEffect (() => {
    filterHandle();
    saveToLocal();
  }, [todos,status]);

  

  //save todos to local storage
  const saveToLocal = () => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }
  //get todos list from local storage
  const getFromLocal = () => {
    if(localStorage.getItem("todos") === null) {
      localStorage.getItem("todos", JSON.stringify([]));
    }
    else {
      let localTodo = JSON.parse(localStorage.getItem("todos"));
      setTodo(localTodo);
    }
  }
  const filterHandle = () => {
    switch(status) {
      case "Uncompleted": 
        setFilterTodo(todos.filter(el => el.completed === false));
        break;
      case "Completed":
        setFilterTodo(todos.filter(el => el.completed === true));
        break;
      default:
        setFilterTodo(todos);
    }
  }

  return (
    <div className="App">
      <header> <h1 className = "header">Monkie_J To Do List</h1></header>
      <Form
        inputText = {inputText} 
        setInputText = {setInputText}
        todos = {todos}
        setTodo = {setTodo}
      ></Form>
      <TodoList 
        todos = {todos}
        setTodo = {setTodo}
        filterTodo = {filterTodo}
      ></TodoList>
      <Control
        filterTodo = {filterTodo}
        setStatus = {setStatus}
      ></Control>
    </div>
  );
}

export default App;
