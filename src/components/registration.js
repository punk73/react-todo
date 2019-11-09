import React, {Component} from 'react';

export default class Registration extends Component {

    state = {
        email : '',
        password : '',
        username : '',
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col s12">
                        <div className="card">
                            <div className="card-content">
                                <span className="card-title blue-text"><h4>Registration</h4></span>
                                <form className="container" onSubmit={this.formOnSubmit} >
                                    <div className="row">
                                    <div className="input-field col s12">
                                        <input placeholder="Placeholder" id="first_name" type="text" className="validate" />
                                        <label htmlFor="first_name">First Name</label>
                                    </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>

                    
                </div>
            </div>
        )
    }

    formOnSubmit = (e) => {
        console.log(e, "form on submit")
    }

}