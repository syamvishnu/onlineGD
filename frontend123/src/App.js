import React from 'react'
  import {BrowserRouter as Router, Route} from "react-router-dom";
import Loginpage from "./components/Loginform";
import Homepage from "./components/Homepage";
import Registerpage from "./components/Registerform";
import Logout from "./components/Logout"
import axios from 'axios';
import Protected from './components/Protected';

function App() {
  axios.defaults.withCredentials=true 
  return (
    <div>
      <Router>
        <Route path="/" exact component={Loginpage} />
        <Route path="/home" exact  ><Protected cmp={Homepage} /></Route>
        <Route path="/register19211221" exact component={Registerpage} />
        <Route path="/logout" exact component={Logout} />
      </Router> 
    </div>
  );
}

export default App;
