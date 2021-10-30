import React, { Component } from 'react';
import bookpic from '../../assests/bookcard/Imagebook.png';
import './cart.scss';

export class cartdeatils extends Component {
    render() {
        return (
            <>
               <div className="cart-details">
                    <div>
                        <img className="img-book" src={bookpic} />
                    </div>
                    <div className="text-content">
                        <div className="bag-text">
                            <div className="cart-title">look at me</div>
                            <div className="cart-bookAuthor">by Haary</div>
                            <div className="price">Rs. 123</div>
                        </div>
                        
                    </div>
                </div> 
                
            </>
        )
    }
}

export default cartdeatils
