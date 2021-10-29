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
        super(props)

        this.state = {
            openlogin: true,
            opensign: false
        }
    }

    login = () => {
        this.setState({
            open: true,
            opensign: false
        })
    }

    signUp = () => {
        this.setState({
            open: false,
            opensign: true
        })
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
                        <Link className="loginlink" style={{ color: this.state.openlogin ? 'black' : 'grey' }} to={'/loginsignup'} >
                            <span style={{ color: this.state.openlogin ? 'black' : 'grey', textDecoration: this.state.openlogin ? 
                            'underline' : 'none', textDecorationColor: this.state.openlogin ? 'maroon' : 'white' }} 
                            className="btn text "  onClick={this.login}  >LOGIN </span>
                        </Link>
                        <Link  style={{color:this.state.opensign ? 'black' : 'grey'}}  to={'/loginsignup/Signup'}  >
                            <span className="btn text2"  onClick={this.signUp}
                            style={{color:this.state.opensign ? 'black' : 'grey', textDecoration:this.state.opensign?
                            'underline': 'none', textDecorationColor:this.state.opensign?'maroon':'white'}}   >
                                SIGNUP </span>
                        </Link>
                    </div>
                    <div className="LoginSign-box">
                        {/* {this.handleOpen ? <Login/> : <Signup/>} */}
                        <Switch>
                            <Route exact path="/loginsignup" component={Login} />
                            <Route exact path="/loginsignup/Signup" component={Signup} />



                        </Switch>

                    </div>

                </div>


            </div>
        );
    }
}

export default LoginSignup;

// className={"btn-group pull-right " + (this.props.showBulkActions ? 'show' : 'hidden')}