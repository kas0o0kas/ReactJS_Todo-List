import React from 'react';
import Todo from './Todo';


const TodoList = ({todos,setTodo, filterTodo}) => {
    
    return (
        <div className = "todo_container">
            <ul
                className="todo_list"
            >
                {filterTodo.map((todo,key)=> (
                    <Todo  
                        key = {key} 
                        text = {todo.text}
                        id = {todo.id}
                        completed = {todo.completed}
                        todos = {todos}
                        setTodo = {setTodo}
                    ></Todo>
                ))}
            </ul>   
        </div>
    );
};

export default TodoList;