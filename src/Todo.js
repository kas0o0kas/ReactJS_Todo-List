import React from 'react';

const Todo = ({text,id,completed,todos,setTodo}) => {
    const deleteHandle = () => {
        setTodo(todos.filter((el) => 
            el.id !== id
        ));
    };

    const checkHandle = () => {
        setTodo(todos.map(item => {
            if(item.id === id) {
                return {
                    ...item, completed : !completed
                }
            }
            return item;
        }));
    };

    return (
        <div className = "todo">
            <li className = {`todo_item ${completed?"completed":""}`}>
                {text}
            </li>
            <button onClick = {checkHandle}><i className = "fas fa-check"></i></button>
            <button onClick = {deleteHandle}><i className = "fas fa-trash"></i></button>
        </div>
    );
};

export default Todo;