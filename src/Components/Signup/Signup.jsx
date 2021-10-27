import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import '../login/login.scss'
import {Redirect} from "react-router-dom";



class Signup extends Component {
   


    render() {
       
        let styles = {
            helperText: {

                color: 'red',
                fontWeight: 'bold',
                fontSize: '.8em',
                marginLeft: '1px',
            }
        }
        return (
            <div>
                <div className="login-frame">
                    <form className="login-form">
                        <div className="reg-input">
                            <TextField
                                id="FullName"
                                type="text"
                                name="fName"
                                label="FullName"
                                variant="outlined"
                                size="small"
                               />
                            <TextField
                            
                                id="Email"
                                type="text"
                                name="fName"
                                label="Email"
                                variant="outlined"
                                size="small"
                               
                            />
                            <TextField
                                
                                id="password"
                                type="password"
                                name="password"
                                label="Password"
                                variant="outlined"
                                size="small"
                               
                            />
                            <TextField
                                
                                id="Mobileno"
                                type="test"
                                name="Mobileno"
                                label="Mobileno"
                                variant="outlined"
                                size="small"
                              
                            />

                        </div>
                        <div className="Login-button">
                            <Button className="button1" variant="contained"  onClick={this.signup}>
                                Signup
                            </Button>
                        </div>

                    </form>
                </div>

            </div>
        );
    }
}

export default Signup;