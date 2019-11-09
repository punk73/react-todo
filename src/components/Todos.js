
import React , {Component} from 'react';
import TodoList from './TodoList';
import TodoForm from './TodoForm';
import Axios from 'axios';
import Url from '../config';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min';

export default class Todos extends Component {
    state = {
        todos : []
    }

    deleteTodo = (id) => {
        const todos = this.state.todos.filter(todo => {
            return todo._id !== id;
        })

        const url = Url.api + 'todos/' + id;
        Axios.delete(url)
         .then(responses => {
             console.log(responses)

             this.setState({
                 todos  : todos
             })

             this.showMessage('data deleted')
         }).catch(error => {
             console.log(error)

         })

    }

    handleSubmit = (newTodo) => {

        Axios.post(Url.api + 'todos', newTodo )
            .then(res => {
                console.log(res);
                return res.data;
            }).then(data => {
                
                const todos = [...this.state.todos, data.data ];

                this.setState({
                    todos
                })
                
                this.showMessage("data added")
            })
            .catch(error => {
                this.showMessage('something went wrong', 'error');
                console.log(error)
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

    componentDidMount() {
        const todosApi = Url.api + 'todos';
        console.log({todosApi})
        Axios.get(todosApi)
            .then(res => {
                // console.log(res)
                return res.data;
            })
            .then(data => {
                const state = this.state;
                console.log({data, state})
                // this.showMessage('data loaded')
                this.setState({
                    todos : data.data
                })

            })
            .catch(error =>{ 
                this.showMessage('something went wrong', 'error')    
                console.log(error) 
            }) 
    }

    showMessage(msg, type = "success") {
        let classes = "text-white green";

        if(type === "error") {
            classes = "text-white red"
        }

        if(type === "info") {
            classes = "text-white blue-lighten-2"
        }

        M.toast({
            html : msg,
            classes : classes
        })
    }
}

