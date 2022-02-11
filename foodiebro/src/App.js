import './App.css'
import Homepage from "./myviews/homepage/Homepage"
import Nothomepage from "./myviews/homepage/Nothomepage"
import Login from "./myviews/login/login"
import Register from "./myviews/register/register"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Cart from "./myviews/homepage/Cart";
import Profile from "./myviews/homepage/Alert";
import { useState } from 'react';
import Tracker from './myviews/homepage/Tracker'
import Home from './myviews/homepage/Home'
import Aboutus from './myviews/homepage/Aboutus'

function App() {

  const [ user, setLoginUser] = useState({})
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path ="/">
            {
                <Homepage/>
            }
          </Route>
          <Route exact path="/login">
            <Login setLoginUser={user}/>
          </Route>
          <Route exact path="/register">
            <Register />
          </Route>
          <Route exact path="/cart">
            <Cart/>
          </Route>
          <Route exact path="/aboutus">
            <Aboutus/>
          </Route>
          <Route exact path="/profile">
            <Profile />
          </Route>
          <Route exact path="/tracker">
            <Tracker/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;