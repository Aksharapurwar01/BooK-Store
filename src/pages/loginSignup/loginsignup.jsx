import React, { Component } from 'react';
import Login from '../../Components/login/login'
import Signup from '../../Components/Signup/Signup'
import Button from '@material-ui/core/Button';
import womenpic from '../../assests/Login-Signup-Dashboard/2766594.png';
import {
    BrowserRouter,
    Switch,
    Route,
    Link
} from "react-router-dom";
import './LoginSignup.scss';
import { Redirect } from "react-router-dom"

class LoginSignup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            handleOpen: true
           
        }
    }

   

    render() {

      

        return (
            <div className="main-frame">
                <div className="main-content">
                    <div className="main-title">
                        <img className="img-disp" src={womenpic}></img>
                        <span className="onlineShopping" style={{ marginTop: '16px' }}>Online Book Shopping</span>
                    </div>
                </div>
                <div className="main1-frame">
                    <div className="main1-title">
                        <Button style={{ textDecoration: "none", color: "black" }} handleOpen={this.state={handleOpen:true}} >
                            <span className="btn text " >LOGIN </span>
                        </Button>
                        <Button style={{ textDecoration: "none", color: "black" }}  handleOpen={this.state={handleOpen:false}} >
                            <span className="btn text2"  >SIGNUP </span>
                        </Button>
                    </div>
                    <div className="LoginSign-box">
                        {this.handleOpen ? <Signup/> : <Login/>}
                    </div>

                </div>


            </div>
        );
    }
}

export default LoginSignup;