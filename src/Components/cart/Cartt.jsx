import React, { Component } from 'react';
import Header from '../header/header';
import Footer from '../Footer/footer';
import './cart.scss';
import Button from '@mui/material/Button';
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { Redirect } from 'react-router';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import CartDetails from './cartdeatils';
import bookpic from '../../assests/bookcard/Imagebook.png';
import {
    Switch,
    Route,
    Link
} from "react-router-dom";

import UserServices from '../../services/userservices';


const obj = new UserServices();




export class Cartt extends Component {
    constructor(props) {
        super(props)

        this.state = {
            book: [],
            open: false,
            openCon: false,
            FullName: "",
            Number: "",
            PinCode: "",
            Locality: "",
            Address: "",
            City: "",
            State: "",
            nameError: false,
            numberError: false,
            pinError: false,
            locError: false,
            addError: false,
            cityError: false,
            stateError: false,

        }
    }

    handleClick = () => {
        this.setState({ open: true });
    }

    getCartItem = () => {
        obj.getCartItem().then((response) => {
            console.log(response.data.result);
            this.setState({ book: response.data.result });
        }).catch(error => {
            console.log(error);
        })
    }

    handleContinue = () => {
        var isValid = this.isValidated();
        if (!isValid) {
            this.setState({ openCon: true });
            console.log("validation successfull");
            let userData = {
                "addressType": "Home",
                "fullAddress": `${this.state.FullName},${this.state.Address},${this.state.Locality},${this.state.PinCode},${this.state.Number}`,
                "city": this.state.City,
                "state": this.state.State
            }
            obj.getCustomerDetails(userData).then((data) => {
                console.log('data customeer details', data);
                this.setState({ openCon: true });


            })
                .catch(error => {
                    console.log('Error', error);
                });

        }

    }

    componentDidMount() {
        this.getCartItem();
    }

    OrderPlaced = () => {
        let orderDetails = [];
        this.state.book.map((value) => {
            let arr = {
                "product_id": value.product_id._id,
                "product_name": value.product_id.bookName,
                "product_quantity": value.quantityToBuy,
                "product_price": value.product_id.price
            };
            orderDetails.push(arr);
        })
    
        let data = {
            orders: orderDetails,
        };
        console.log("DATA ORDER SUCCES", data);
        
        obj.orderItem(data).then((response) => {
            
            console.log(response);
            console.log("DATA ORDER SUCCES", data);
    
        }).catch((error) => {
            console.log(error);
        })
    
    }
    

  


    isValidated = () => {
        let isError = false;
        const errors = this.state;
        errors.nameError = this.state.FullName !== '' ? false : true;
        errors.numberError = this.state.Number !== '' ? false : true;
        errors.cityError = this.state.City !== '' ? false : true;
        errors.pinError = this.state.PinCode !== '' ? false : true;
        errors.addError = this.state.Address !== '' ? false : true;
        errors.locError = this.state.Locality !== '' ? false : true;
        errors.stateError = this.state.State !== '' ? false : true;

        this.setState({
            ...errors
        })

        return isError = errors.nameError || errors.numberError || errors.pinError || errors.addError || errors.locError || errors.stateError || errors.cityError
    }

    change = (e) => {
        console.log(e.target.value);
        this.setState({
            [e.target.name]: e.target.value
        });
    }



    render() {
        const cartDetails = this.state.book.map((value, index) => {
            return (
                <div className="cart-details">
                    <div>
                        <img className="img-book" src={bookpic} />
                    </div>
                    <div className="text-content">
                        <div className="bag-text">
                            <div className="cart-title">{value.product_id.bookName}</div>
                            <div className="cart-bookAuthor">by {value.product_id.author}</div>
                            <div className="price">Rs. {value.product_id.price}</div>
                        </div>

                    </div>
                </div>
            )
        });

        const orderDetails = this.state.book.map((value, index) => {
            return (
                <div className="cart-details">
                    <div>
                        <img className="img-book" src={bookpic} />
                    </div>
                    <div className="text-content">
                        <div className="bag-text">
                            <div className="cart-title">{value.product_id.bookName}</div>
                            <div className="cart-bookAuthor">by {value.product_id.author}</div>
                            <div className="price">Rs. {value.product_id.price}</div>
                        </div>

                    </div>
                </div>

            )
        });
        return (
            <div>
                <Header />
                <div className="Cartt-main">
                    <div className="title">Home/My Cart</div>
                    <div className="Cartt-content">
                        <div >My Cart  ({this.state.book.length})</div>
                        {cartDetails}

                        <div className="btn-content">
                            <Button variant="contained" className="btn-place" onClick={this.handleClick}  >
                                Place Order
                            </Button>
                        </div>
                    </div>
                    {this.state.open ?
                        <div className="address-details">
                            <div className="customer-deatiles">
                                <div className="header-detail">Customer Details</div>
                                <div className="details-btn">Add new Address</div>
                            </div>
                            <div className="customer-content-names">

                                <div className="city">
                                    <div>
                                        <TextField

                                            size="small"
                                            label="FullName"
                                            type="text"
                                            name="FullName"
                                            variant="outlined"
                                            error={this.state.nameError}
                                            onChange={e => this.change(e)}
                                            helperText={this.state.nameError ? "Enter your Name" : ''}

                                        />
                                    </div>
                                </div>
                                <div className="state">
                                    <div>
                                        <TextField
                                            size="small"
                                            label="Phone Number"
                                            type="text"
                                            name="Number"
                                            variant="outlined"
                                            error={this.state.numberError}
                                            onChange={e => this.change(e)}
                                            helperText={this.state.numberError ? "Enter Mobile Number" : ''}

                                        /></div>
                                </div>
                            </div>
                            <div className="customer-content-names">
                                <div className="InputFields">
                                    <TextField
                                        size="small"
                                        label="Pin Code"
                                        type="text"
                                        name="PinCode"
                                        variant="outlined"
                                        error={this.state.pinError}
                                        onChange={e => this.change(e)}
                                        helperText={this.state.pinError ? "Enter your Pincode" : ''}

                                    />
                                </div>
                                <div className="InputFields">
                                    <TextField

                                        size="small"
                                        label="Locality"
                                        type="text"
                                        name="Locality"
                                        variant="outlined"
                                        error={this.state.locError}
                                        onChange={e => this.change(e)}
                                        helperText={this.state.locError ? "Enter your Locality" : ''}

                                    />
                                </div>
                            </div>

                            <div className="address-feild"><TextField

                                label="Address"
                                type="text"
                                name="Address"
                                variant="outlined"
                                fullWidth
                                error={this.state.addError}
                                onChange={e => this.change(e)}
                                helperText={this.state.addError ? "Enter your Address" : ''}

                            /></div>


                            <div className="customer-content-names">
                                <div className="city">
                                    <div><TextField

                                        size="small"
                                        label="City"
                                        type="text"
                                        name="City"
                                        variant="outlined"
                                        error={this.state.cityError}
                                        onChange={e => this.change(e)}
                                        helperText={this.state.cityError ? "Enter your City" : ''}
                                    />
                                    </div>
                                </div>
                                <div className="state">
                                    <div><TextField

                                        size="small"
                                        label="State"
                                        type="text"
                                        name="State"
                                        variant="outlined"
                                        error={this.state.stateError}
                                        onChange={e => this.change(e)}
                                        helperText={this.state.stateError ? "Enter State" : ''}

                                    /></div>
                                </div>
                            </div>
                            <div className="heading">
                                <div className="work ">Type</div>
                            </div>
                            <div>
                                <FormControl component="fieldset">

                                    <RadioGroup row aria-label="gender" name="row-radio-buttons-group">
                                        <FormControlLabel value="work" control={<Radio />} label="Work" />
                                        <FormControlLabel value="home" control={<Radio />} label="Home" />
                                        <FormControlLabel value="other" control={<Radio />} label="Other" />

                                    </RadioGroup>
                                </FormControl>
                            </div>

                            {this.state.openCon ? null :
                                <div className="btn-content">
                                    <Button variant="contained" className="btn-place" onClick={this.handleContinue}>
                                        Continue
                                    </Button>
                                </div>
                            }
                        </div>

                        :

                        <div className="address">
                            Address Details
                        </div>

                    }

                    {this.state.openCon ?

                        <div className="Cartt-content">
                            <div >Order Summery</div>
                            {orderDetails}

                            <div className="btn-content">
                                <Link style={{ textDecoration: 'none' }} to={'/orderplaced'}><Button variant="contained" className="btn-place" onClick= {this.OrderPlaced}  >
                                    Checkout
                                </Button></Link>
                            </div>
                        </div>
                        :
                        <div className="order" >
                            Order Summary
                        </div>
                    }


                </div>
                <Footer />

            </div>
        )
    }
}

export default Cartt
