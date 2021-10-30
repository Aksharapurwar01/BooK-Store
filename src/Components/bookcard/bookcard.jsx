import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import bookpic from '../../assests/bookcard/Imagebook.png';
import UserServices from '../../services/userservices';

const obj = new UserServices();

export default function MediaCard(props) {

    const addToCart = (info) => {



        obj.addToCart(info._id).then((response) => {
    
          console.log(response);
    
        }).catch(error => {
          console.log("error", error);
        })
      }



    return (
        <Card className="books-main">
            <CardContent className="book-image">
                <img className="image" src={bookpic} alt="" />
            </CardContent>
            <CardActions className="card-text">
                <div className="book-title">{props.info.bookName}</div>
                <div className="author">by {props.info.author}</div>
                <div className="price">Rs.{props.info.price}</div>
                <div className="book-buttons">
                    <Button className="buttonbag" variant="contained" onClick={() => { addToCart(props.info) }} >
                        Add To Bag
                    </Button>
                    <Button className="buttonwish" variant="contained">
                        Wishlist
                    </Button>

                </div>
            </CardActions>
        </Card>
    );
}
