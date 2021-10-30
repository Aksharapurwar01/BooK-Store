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





export class Cartt extends Component {
    constructor(props) {
        super(props)

        this.state = {
            open: false,
            openCon: false,
        }
    }

    handleClick = () => {
        this.setState({ open: true });
    }



    render() {
        return (
            <div>
                <Header />
                <div className="Cartt-main">
                    <div className="title">Home/My Cart</div>
                    <div className="Cartt-content">
                        <div >My Cart (1)</div>
                        <CartDetails/>

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
                                    <div><TextField

                                        size="small"
                                        label="FullName"
                                        type="text"
                                        name="FullName"
                                        variant="outlined"

                                    />
                                    </div>
                                </div>
                                <div className="state">
                                    <div><TextField

                                        size="small"
                                        label="Phone Number"
                                        type="text"
                                        name="Number"
                                        variant="outlined"

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

                                    />
                                </div>
                                <div className="InputFields">
                                    <TextField

                                        size="small"
                                        label="Locality"
                                        type="text"
                                        name="Locality"
                                        variant="outlined"

                                    />
                                </div>
                            </div>

                            <div className="address-feild"><TextField

                                label="Address"
                                type="text"
                                name="Address"
                                variant="outlined"
                                fullWidth

                            /></div>


                            <div className="customer-content-names">
                                <div className="city">
                                    <div><TextField

                                        size="small"
                                        label="City"
                                        type="text"
                                        name="City"
                                        variant="outlined"
                                    /></div>
                                </div>
                                <div className="state">
                                    <div><TextField

                                        size="small"
                                        label="State"
                                        type="text"
                                        name="State"
                                        variant="outlined"

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

                    <div className="order" >
                        Order Summery
                    </div>

                </div>
                <Footer />

            </div>
        )
    }
}

export default Cartt
