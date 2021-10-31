import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import './login.scss';
import Button from '@material-ui/core/Button';
import UserServices from '../../services/userservices';
import { Snackbar, IconButton } from '@mui/material';
import { useHistory } from "react-router-dom";
import { Redirect } from 'react-router-dom';

const obj = new UserServices();




export class login extends Component {
    constructor(props) {
        super(props);
        this.state = {

            email: "",
            password: "",
            emailError: false,
            passError: false,
            redirect: "",
        }

    }


    isValidated = () => {
        let isError = false;
        const errors = this.state;
        errors.emailError = this.state.email !== '' ? false : true;
        errors.passError = this.state.password !== '' ? false : true;

        this.setState({
            ...errors  //
        })

        return isError = errors.emailError || errors.passError
    }

    next = () => {
        var isValid = this.isValidated();
        if (!isValid) {
            console.log("Validation Sucessfull login!");
            let signinObj = {
                "email": this.state.email,         //values from api
                "password": this.state.password,
            }
            console.log(signinObj);
            obj.login(signinObj).then((response) => {
                console.log(response);
                localStorage.setItem("token", response.data.result.accessToken);
                this.setState({ snackbaropen: true, snackbarmsg: "Login Successful!" })
                this.setState({ redirect: "/home" });
               
            }).catch((error) => {
                console.log(error);
                this.setState({ snackbaropen: true, snackbarmsg: "Login Failed!" })
            })
        } else {
            this.setState({ snackbaropen: true, snackbarmsg: "Please enter data!" })


        }
    }

    change = (e) => {
        console.log(e.target.value);
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    snackbarClose = (event) => {
        this.setState({ snackbaropen: false });
    };



    render() {

        if (this.state.redirect) {
            return <Redirect to={this.state.redirect} />
        }

        return (
            <div>
                <Snackbar
                    anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                    open={this.state.snackbaropen}
                    autoHideDuration={3000}
                    onClose={this.snackbarClose}

                    message={<span id="message_id">{this.state.snackbarmsg}</span>}
                    action={[
                        <IconButton key="close" aria-label="Close" color="inherit" onClick={this.snackbarClose}>
                            X
                        </IconButton>
                    ]}
                />

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
                                error={this.state.emailError}
                                onChange={e => this.change(e)}
                                helperText={this.state.emailError ? "Enter an email" : ''}

                            />
                            <TextField

                                id="password"
                                type="password"
                                name="password"
                                label="Password"
                                variant="outlined"
                                size="small"
                                error={this.state.passError}
                                onChange={e => this.change(e)}
                                helperText={this.state.passError ? "Enter a password" : ''}

                            />
                            <div className="passworddchange">
                                <span className="forget">Forget Password?</span>
                            </div>

                        </div>
                        <div className="Login-button">
                            <Button className="button1" variant="contained" onClick={this.next} color="white" >
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
