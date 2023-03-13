import React, {useState} from 'react';
import {connect} from "react-redux";
import TodoListItem from "./TodoListItem";

const TodoList = (props) => {
    const [input, setInput] = useState('')

    const onFormSubmit = (event) => {
        event.preventDefault();
        const newItem = {
            id: Math.random().toString(),
            title: input,
            isDone: false
        }
        props.createItem(newItem)
        setInput('')
    }

    return (
        <div>
            <h1>{props.appName}</h1>
            <hr/>

            <form onSubmit={onFormSubmit}>
                <input
                    type='text'
                    className='taskInput'
                    value={input}
                    required
                    onChange={(event) => setInput(event.target.value)}/>
                <button className='button-add'
                    type='submit'> Create </button>
            </form>
            {props.list.map(item =>
                <TodoListItem
                    key={item.id}
                    item={item}
                />
            )}
        </div>
    );
};
const mapStateToProps = (state) => ({
    list: state.todoList,
    appName: state.appName
})

const mapDispatchToProps = (dispatch) => ({
    createItem: (newItem) => dispatch({type: "CREATE_TASK", payload: newItem}),
})
export default connect(mapStateToProps, mapDispatchToProps)(TodoList);