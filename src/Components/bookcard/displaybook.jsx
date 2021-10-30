import React from 'react';
import Bookcard from './bookcard';
import './bookcard.scss';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";


function Displaybook(props) {

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };




    const booksdiplay = props.bookarr.map((info) => <Bookcard info={info} displayBook={props.displayBook} />);
    //mapping,arr map with values in api

    return (
        <div>

            <div>
                <div className="booksheader">
                    <h2 >Books</h2>
                    <p className="headerp">(128 items)</p>
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
                            <MenuItem onClick={handleClose}>Price: High to low</MenuItem>
                            <MenuItem onClick={handleClose}>Price: Low to high</MenuItem>
                            <MenuItem onClick={handleClose}>Newest arivals</MenuItem>
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


