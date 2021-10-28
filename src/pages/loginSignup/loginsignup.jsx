import React, { Component } from 'react';
import Login from '../../Components/login/login'
import Signup from '../../Components/Signup/Signup'
import womenpic from '../../assests/Login-Signup-Dashboard/2766594.png';
import {
    Switch,
    Route,
    Link
} from "react-router-dom";
import './LoginSignup.scss';
import homee from '../home/home';

class LoginSignup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            handleOpen: true,
            active:true
           
        }
    }

   

    render() {

      

        return (
            <div className="main-frame">
                <div className="main-content">
                    <div className="main-title">
                        <img className="img-women" src={womenpic}></img>
                        <span className="onlineShopping">Online Book Shopping</span>
                    </div>
                </div>
                <div className="main1-frame">
                    <div className="main1-title">
                        <Link className="loginlink"  to  ={'/'} >
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

// className={"btn-group pull-right " + (this.props.showBulkActions ? 'show' : 'hidden')}