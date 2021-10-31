import React, { Component } from 'react';
import Header from '../header/header';
import Footer from '../Footer/footer';
import './ordersuccess.scss';
import Success from '../../assests/success.png';
import Button from '@material-ui/core/Button';
import { Redirect } from 'react-router-dom';

class OrderSuccess extends Component {
    constructor(props) {
        super(props)
    
        this.state = {

            redirect: "",
             
        }
    }

    // componentDidMount(){
    //     console.log("book array",this.props.location.state.details)
    // }

    continueShopping = () => {
        this.setState({ redirect: "/home" });
    }

    render() {

        if (this.state.redirect) {
            return <Redirect to={this.state.redirect} />
        }
        return (
            <div>
                <Header />
                <div className="success_main">
                    <div className="success_img">
                        <img className="imagesu" src={Success} alt="Success" />
                    </div>
                    <div className="success_text">
                        hurray!!! your order is confirmed the order id is #123456 save the order id for further communication..
                    </div>
                    <div className="information_table">
                        <table>
                            <tr>
                                <th>Email us</th>
                                <th>Contact us</th>
                                <th>Address</th>
                            </tr>
                            <tr>
                                <td>admin@bookstore.com</td>
                                <td>+91 8163475881</td>
                                <td>Vasundhara, Ghaziabad, Uttar Pradesh 201012</td>
                            </tr>
                        </table>
                    </div>
                    <div className="ctn_shopping">
                        <Button className="shop_btn" onClick={this.continueShopping} fullWidth size="small" color="primary" variant="contained">
                            Continue Shopping
                        </Button>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
};

export default OrderSuccess;