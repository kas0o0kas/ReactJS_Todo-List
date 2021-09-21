import React from 'react';

const Form = ({inputText, setInputText, todos, setTodo}) => {
    const inputTextHandle = (e) => {
        console.log(e.target.value);
        setInputText(e.target.value);
    };

    const formSubmit = (e) => {
        e.preventDefault();
        setTodo([
            ...todos,{text : inputText, completed : false, id : Math.random()*1000}
        ]);
        console.log(todos);
        setInputText('');
    };

    return (
        <form onSubmit = {(e) =>formSubmit(e)} className="form">
            <input
                type = "text"
                className = "todo_input"
                placeholder = "Add New"
                value= {inputText}
                onChange = {(e) => inputTextHandle(e)}
            >

            </input>
            <button
                className = "todo_button"
                type = "submit"
            >
                <i className = "fas fa-plus-square"></i>
            </button>
        </form>
    );
};

export default Form;