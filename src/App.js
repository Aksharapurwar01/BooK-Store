import logo from './logo.svg';
import './App.css';
import LoginSignup from './pages/loginSignup/loginsignup';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div >
       <Router>
         <Switch>
          <Route path="/" component ={LoginSignup}>
           
          </Route>
          </Switch>
          </Router>
    </div>
  );
}

export default App;
