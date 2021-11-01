import React, { Component } from 'react'
import './Wishlist.scss';
import { Link } from "react-router-dom";
import Header from '../header/header';
import Footer from '../Footer/footer';
import Button from '@material-ui/core/Button';
import Book from '../../assests/bookcard/Imagebook.png';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import UserServices from '../../services/userservices';
import Divider from '@mui/material/Divider';

const obj = new UserServices();

export default class WishList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            books: [],
        }

    }

    componentDidMount() {
        this.getWishlistItem();
        // this.getCartItems();
    }

    //getting wish list items

    getWishlistItem = () => {
        obj.getWishlist().then((response) => {
            console.log(response.data.result);
            this.setState({ books: response.data.result });
        }).catch(error => {
            console.log(error);
        })

    }

    // getCartItems = () => {
    //     obj.getCartItem().then((response) => {
    //         console.log(response.data.result);
    //         this.setState({ books: response.data.result });
    //     }).catch(error => {
    //         console.log(error);
    //     })

    // }
    
    //move to cart
    moveToCart = (value) => {
        let wish = {
            isCart: true
        }
        console.log(value)
        obj.addToCart(value, wish).then((response) => {
            console.log(response);
            this.getCartItems();
            this.deleteWish(value);
        }).catch(error => {
            console.log(error);
        })
    }

    //remove wishlist item

    deleteWish(id) {
        console.log(typeof (id));
        obj.removeWishItem(id).then((response) => {
            console.log(response);
            this.getWishlistItem();
            console.log("delete")
        }).catch(error => {
            console.log(error);
        })
    }


    render() {
        console.log(this.state.books.length)

        const wishDetails = this.state.books.map((value, index) => {
            return (
                <>
                <div className="cart-details">
                    <div>
                        <img className="img-book" src={Book} alt="" />
                    </div>
                    <div className="text-content">
                        <div className="bag-text">
                            <div className="cart-title">{value.product_id.bookName}</div>
                            <div className="cart-bookAuthor">by {value.product_id.author}</div>
                            <div className="price">Rs.{value.product_id.price}</div>
                        </div>
                        <div className="delete_Button">
                            <div className="delelte_content">
                                <div
                                    className="del_icon"
                                    onClick={() => this.deleteWish(value.product_id._id)}
                                >
                                    <DeleteForeverIcon />
                                </div>
                            </div>
                            <div className="btn_content4">
                                <Link to="/cart" style={{ textDecoration: 'none' }}>
                                    <Button variant="contained" className="btn_place4" onClick={() => this.moveToCart(value.product_id._id)} >
                                        Move to cart
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                    
                </div>
                <Divider/>
                </>
               
            )
        })

        return (
            <div>
                <Header val={this.state.books.length} />
                <div className="Cartt-main">
                    <div className="Cartt-content">
                        <div className="wish" >
                            <div class="wishhead">My Wishlist({this.state.books.length}) </div>
                            </div>
                        <Divider />
                        {wishDetails}
                        
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}