import React from 'react';
import Bookcard from './bookcard';
import './bookcard.scss';



function displaybook(props) {

    const booksdiplay = props.bookarr.map((info) => <Bookcard info={info} displayBook={props.displayBook} />); 
    //mapping,arr map with values in api

    return (
        <div>

            <div>
                <div className="booksheader">
                    <h2 >Books</h2>
                    <p className="headerp">(128 items)</p>
                </div>
                <div className="bookcard">{booksdiplay}</div>
            </div>

        </div>
    )
}

export default displaybook


