
import React from 'react';

const Todos = ({todos, deleteTodo }) => {
    const TodoList = todos.map(todo => {
        return (
            <div className="collection-item" onClick={(e) => { deleteTodo(todo._id) }} key={todo._id}>
                {todo.content} <i className="material-icons right">delete</i>
            </div>
        )
    })
    
    return (
        <div className="todos collection">
            { TodoList }
        </div>
    )
}

export default Todos;