import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import './login.scss';
import Button from '@material-ui/core/Button';
import { Redirect } from "react-router-dom";



export class login extends Component {
    constructor(props) {
        super(props);
        this.state = {

            email: "",
            password: "",
            emailError: false,
            passError: false,
        }

    }


    isValidated = () => {
        let isError = false;
        const errors = this.state;
        errors.emailError = this.state.email !== '' ? false : true;
        errors.passError = this.state.password !== '' ? false : true;

        this.setState({
            ...errors
        })

        return isError = errors.emailError || errors.passError
    }

    next = () => {
        var isValid = this.isValidated();
        if (!isValid) {
            console.log("Validation Sucessfull!");
        }
    }

    change = (e) => {
        console.log(e.target.value);
        this.setState({
            [e.target.name]: e.target.value
        });
    }



    render() {
        
        return (
            <div>
                <div className="login-main">
                    <form className="login-form">
                        <div className="login-input">
                            <TextField

                                id="userName"
                                type="text"
                                name="email"
                                label="User Name"
                                variant="outlined"
                                size="small"
                                error = {this.state.emailError}
                                onChange = {e => this.change(e)}
                                helperText = {this.state.emailError ? "Enter an email" : ''} 

                            />
                            <TextField

                                id="password"
                                type="password"
                                name="password"
                                label="Password"
                                variant="outlined"
                                size="small"
                                error = {this.state.passError}
                                onChange = { e=> this.change(e)}
                                helperText={this.state.passError ?"Enter a password" : ''}

                            />
                            <div className="passworddchange">
                                <span className="forget">Forget Password?</span>
                            </div>

                        </div>
                        <div className="Login-button">
                            <Button className="button1" variant="contained" onClick = {this.next} >
                                Login
                            </Button>
                        </div>

                        <span style={{ marginTop: '12px' }}>---------- OR ----------</span>
                        <div className="div-buttons">
                            <Button className="button2" variant="contained" >
                                Facebook
                            </Button>
                            <Button className="button3" variant="contained" >
                                Google
                            </Button>

                        </div>

                    </form>
                </div>

            </div>
        )
    }
}

export default login
