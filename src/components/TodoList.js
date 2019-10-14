
import React from 'react';

const Todos = ({todos}) => {
    const TodoList = todos.map(todo => {
        return (
            <div className="collection-item" key={todo.id}>
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