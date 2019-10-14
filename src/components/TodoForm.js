
import React , {Component} from 'react';

export default class TodoForm extends Component {
    state = {
        todo : {
            content : ''
        }
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.handleSubmit(this.state.todo)
        this.setState({
            todo : {
                content : ''
            }
        })
    }

    inputOnChange = (e) => {
        const content = e.target.value;
        
        this.setState({
            todo: {
                content
            }
        })
    }

    render = () => {
        return (
            <div>
                <form id="form" className="form col s12" onSubmit={ this.handleSubmit }>
                    <div className="row">
                        <div className="input-field col s12">
                            <input placeholder="Write down your to do" type="text" id="content" className="validate center" onChange={this.inputOnChange} value={this.state.todo.content} />
                            <label htmlFor="content"></label>
                        </div>
                        <button className="btn btn-default blue white-text">Submit</button>
                    </div>

                </form>
            </div>
        )
    }
}