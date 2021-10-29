import './App.css';
import LoginSignup from './pages/loginSignup/loginsignup';
import {
  BrowserRouter as Router,
  Switch,
  Route,Redirect} from "react-router-dom";
  import home from './pages/home/home';
import Cartt from './Components/cart/Cartt';

function App() {
  return (
    <div >
       <Router>
         <Switch>

         <Route exact path="/">
            <Redirect to="/loginsignup" />
          </Route>
          <Route path="/loginsignup" component={LoginSignup} />
           
          
          <Route path="/home" component ={home}>
           
           </Route>
           <Route exact path="/Cart" component ={Cartt} />
           
           
       
          
          </Switch>
          </Router>
    </div>
  );
}

export default App;
