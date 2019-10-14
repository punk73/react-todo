
import React , {Component} from 'react';
import TodoList from './TodoList';
import TodoForm from './TodoForm';

export default class Todos extends Component {
    state = {
        todos : [
            {
              id : 1, content : "do a react project"
            },
            {
              id : 2, content : "practice a new thing"
            },
            {
              id : 3, content : "leveling up your skills"
            }
        ]
    }

    deleteTodo = (id) => {
        const todos = this.state.todos.filter(todo => {
            return todo.id !== id;
        })

        this.setState({
            todos  : todos
        })
    }

    handleSubmit = (newTodo) => {
        newTodo.id = this.state.todos.length + 1;

        const todos = [...this.state.todos, newTodo ];

        this.setState({
            todos
        })
    }

    render = () => {
        return (
            <div className="container">
                <h2 className="blue-text center">Todo List</h2>
                <TodoList todos={ this.state.todos } deleteTodo={this.deleteTodo} />

                <TodoForm handleSubmit={this.handleSubmit} />
            </div>
        )
    }
}

