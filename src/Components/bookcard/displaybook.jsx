import React from 'react';
import Bookcard from './bookcard';
import './bookcard.scss';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import UserServices from '../../services/userservices';
import { useState, useEffect } from 'react';

const obj = new UserServices();


function Displaybook(props) {

    const [anchorEl, setAnchorEl] = React.useState(null);
    const [bookarr, sortBooks] = React.useState([]);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {   //open
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {  //close
        setAnchorEl(null);
    };

    const ascending = () => {
        let sortData = bookarr.sort((a, b) => (a.price < b.price && 1) || -1);  //ascending
        console.log(sortData);
        sortBooks(sortData);
        handleClose();
    };

    const descending = () => {
        let sortData = bookarr.sort((a, b) => (a.price > b.price && 1) || -1);
        console.log(sortData);
        sortBooks(sortData);
        handleClose();
    };

    const az = () => {
        let sortData = bookarr.sort((a, b) => (a.bookName > b.bookName && 1) || -1);
        console.log(sortData);
        sortBooks(sortData);
        handleClose();
    };

      

    const displayBook= () => {
        obj.getAllbooks().then((response) => {
            sortBooks(response.data.result );
            console.log("sort");
        }).catch((error) => {
            console.log(error);
        });
    }

    useEffect(() =>{
        displayBook();
    },[]);  




    const booksdiplay = bookarr.map((info) => <Bookcard info={info} displayBook={displayBook} />);
    //mapping,arr map with values in api

    return (
        <div>

            <div>
                <div className="booksheader">
                    <h2 >Books</h2>
                    <p className="headerp">({bookarr.length})</p>
                    <div className="menudiv">
                        <Button
                            id="basic-button"
                            aria-controls="basic-menu"
                            aria-haspopup="true"
                            aria-expanded={open ? "true" : undefined}
                            onClick={handleClick}
                        >
                            Sort by relevance <KeyboardArrowDownIcon className="arrow" />
                        </Button>
                        <Menu
                            id="basic-menu"
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleClose}
                            MenuListProps={{
                                "aria-labelledby": "basic-button",
                            }}
                        >
                            <MenuItem  onClick={ascending} >Price: High to low</MenuItem>
                            <MenuItem  onClick={descending}>Price: Low to high</MenuItem>
                            <MenuItem  onClick={az}>A-Z</MenuItem>
                        </Menu>
                    </div>
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

export default Displaybook


