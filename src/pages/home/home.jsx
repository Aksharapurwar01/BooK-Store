import React, { Component } from 'react';
import Header from '../../Components/header/header';
import Footer from '../../Components/Footer/footer';
import Displaybook from '../../Components/bookcard/displaybook';
import UserServices from '../../services/userservices';

const obj = new UserServices();

export class home extends Component {

    constructor(props) {
        super(props)

        this.state = {
            bookarr: [] //array for displays books
        }
    }

    // displayBook = (props) => {
    //     obj.getAllbooks()  //getbooks function
    //         .then((response) => {
    //             this.setState({
    //                 bookarr: response.data.result  //result contains id,title,description,...
    //             })
    //             props.setBooks(response.data.result );
    //         })

    //         .catch((error) => {
    //             console.log(error);
    //         });
    // }

    // componentDidMount() {
    //     this.displayBook();
    // }

    render() {
        return (
            <div>
                <Header/>
                <Displaybook  />

                <Footer/>
                
            </div>
        )
    }
}

export default home
