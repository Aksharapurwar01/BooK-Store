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
                        <Link style={{ textDecoration: "none", color: "black" }} to ={'/'}>
                            <span className="btn text " >LOGIN </span>
                        </Link>
                        <Link style={{ textDecoration: "none", color: "black" }} to={'/Signup'}  >
                            <span className="btn text2"  >SIGNUP </span>
                        </Link>
                    </div>
                    <div className="LoginSign-box">
                        {/* {this.handleOpen ? <Login/> : <Signup/>} */}
                        <Switch>
                            <Route exact path="/" component={Login} />
                            <Route exact path="/Signup" component={Signup} />      
                        </Switch>

                    </div>

                </div>


            </div>
        );
    }
}

export default LoginSignup;