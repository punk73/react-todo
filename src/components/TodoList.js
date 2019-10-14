
import React from 'react';

const Todos = ({todos, deleteTodo }) => {
    const TodoList = todos.map(todo => {
        return (
            <div className="collection-item" onClick={(e) => { deleteTodo(todo.id) }} key={todo.id}>
                {todo.content}
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