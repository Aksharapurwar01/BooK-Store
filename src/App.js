import './App.css';
import LoginSignup from './pages/loginSignup/loginsignup';
import {
  BrowserRouter as Router,
  Switch,
  Route} from "react-router-dom";
  import home from './pages/home/home';


function App() {
  return (
    <div >
       <Router>
         <Switch>
          <Route exact path="/" component ={LoginSignup}> 
           
          </Route>
          <Route path="/home" component ={home}>
           
           </Route>
       
          
          </Switch>
          </Router>
    </div>
  );
}

export default App;
