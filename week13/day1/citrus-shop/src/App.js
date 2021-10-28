
import './App.css';
import Navbar from './components/Navbar';
import ShopContainer from './components/ShopContainer';
import CartContainer from './components/CartContainer';
import About from './components/About';
import Sidebar from './components/Sidebar';


import { useSelector } from "react-redux";
import {BrowserRouter as Router, Switch, Route, Link, Redirect} from "react-router-dom";
import { AppDiv } from "./styled-components/App-style";
import { useState } from "react";

function App() {
  const[viewSidebar, setViewSidebar] = useState(true)
  return (
    <Router>
      <Switch>

    <AppDiv>
      <Navbar viewSidebar={viewSidebar} setViewSidebar={setViewSidebar}/>
      <Sidebar viewSidebar={viewSidebar}/>
      <Route exact path="/">
        <About />
      </Route>
      <Route exact path="/shop">
        <ShopContainer />
      </Route>
      <Route exact path="/cart">
        <CartContainer />
      </Route>
      <Redirect to="/" />
    </AppDiv>
      </Switch>
    </Router>
  );
}

export default App;
