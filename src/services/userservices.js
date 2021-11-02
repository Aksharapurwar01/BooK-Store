import AxiosService from './axiosservice';

const obj = new AxiosService();
const baseurl = "https://bookstore.incubation.bridgelabz.com/bookstore_user/"
const token = localStorage.getItem("token");
const headerconfig = {
    headers: {
        "x-access-token": token,
        }
};

class UserServices {
    registration(data) {
        let response = obj.postMeth(`${baseurl}registration`, data, headerconfig);
        return response;
    }
    login(data) {
        let response = obj.postMeth(`${baseurl}login`, data, headerconfig);
        return response;
    }

    getAllbooks(data) {
        let response = obj.getMeth(`${baseurl}get/book`, data, headerconfig);
        return response;
    }

    addToCart(id){
        let response = obj.postMeth(`${baseurl}add_cart_item/${id}`,{}, headerconfig);
        return response;   
    }

    getCartItem(data) {
        let response = obj.getMeth(`${baseurl}get_cart_items`, headerconfig);
        return response;
    }

    getCustomerDetails(data) {
        let response = obj.putMeth(`${baseurl}edit_user`, data, headerconfig);
        return response;
    }

    orderItem(data) {

        let response = obj.postMeth(`${baseurl}add/order`, data, headerconfig);
        return response;
    
    }

    removeCartItem(id){
        let response = obj.deleteMeth(`${baseurl}remove_cart_item/${id}`, headerconfig);
        return response;
    }

    addToWish(id){
        let response = obj.postMeth(`${baseurl}add_wish_list/${id}`,{}, headerconfig);
        return response;   
    }
    getWishlist() {
        let response = obj.getMeth(`${baseurl}get_wishlist_items`, headerconfig);
        return response;
    }
    removeWishItem(id){
        let response = obj.deleteMeth(`${baseurl}remove_wishlist_item/${id}`, headerconfig);
        return response;
    }


    

  

}

export default UserServices