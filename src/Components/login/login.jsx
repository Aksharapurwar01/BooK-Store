import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import './login.scss';
import Button from '@material-ui/core/Button';
import {Redirect} from "react-router-dom";



export class login extends Component {
   
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
                <div className="login-main">
                    <form className="login-form">
                        <div className="login-input">
                            <TextField
                               
                                id="userName"
                                type="text"
                                name="uName"
                                label="User Name"
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
                            <div className="passworddchange">
                                <span className="forget">Forget Password?</span>
                            </div>

                        </div>
                        <div className="Login-button">
                            <Button className="button1" variant="contained"  >
                                Login
                            </Button>
                        </div>

                        <span style={{marginTop:'12px'}}>---------- OR ----------</span>
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
