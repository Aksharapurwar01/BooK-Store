import React, { Component } from 'react';
import Header from '../header/header';
import Footer from '../Footer/footer';
import './cart.scss';
import Cartdeatils from '../cart/cartdeatils';
import Button from '@mui/material/Button';

export class Cart extends Component {
    

    render() {
        return (
            <div>
                <Header />
                <div className="CartBag-frame">
                    <div className="title">Home/My Cart</div>
                    <div className="cartBag-content">
                        <div >My Cart 1</div>
                         <Cartdeatils/>
                        <div className="btn-content">
                            <Button variant="contained" className="btn-place"  >
                                Place Order
                            </Button>
                        </div>
                    </div>

                </div>
                <Footer />

            </div>
        )
    }
}

export default Cart
