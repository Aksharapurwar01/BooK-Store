import React from 'react';
import Bookcard from './bookcard';
import './bookcard.scss';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';



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
                {/* pagination */}
                <Stack spacing={2}>
                <Pagination count={5} variant="outlined" />
                </Stack>

            </div>

        </div>
    )
}

export default displaybook


