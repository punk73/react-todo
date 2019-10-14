
import React , {Component} from 'react';
import TodoList from './TodoList';

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

    render = () => {
        return (
            <div className="container">
                <h2 className="blue-text center">Todo List</h2>
                <TodoList todos={ this.state.todos } />
            </div>
        )
    }
}

