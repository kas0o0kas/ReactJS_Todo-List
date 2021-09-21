import React from 'react';

const Control = ({filterTodo, setStatus}) => {
    const controlHandle = (e) => {
        setStatus(e.target.value);
    }
    return (
        <div className="todo_control">
            <span className = "control_amount">{(filterTodo.length <= 1)?(filterTodo.length + " Todo left"):(filterTodo.length + " Todos left")}</span>
            <button className = "control_all" value= "All" onClick = {controlHandle}>All</button>
            <button className = "control_active" value = "Uncompleted" onClick = {controlHandle} >Active</button>
            <button className = "control_completed" value = "Completed" onClick = {controlHandle} >Completed</button>
        </div>
    );
};

export default Control;