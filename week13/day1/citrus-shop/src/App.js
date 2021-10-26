
import './App.css';
import Navbar from './components/Navbar';
import ShopContainer from './components/ShopContainer';
import CartContainer from './components/CartContainer';
import About from './components/About';


import { useSelector } from "react-redux";
import {BrowserRouter as Router, Switch, Route, Link, Redirect} from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>

    <div className="App">
      <Navbar />
      <Route exact path="/">
        <About />
      </Route>
      <Route exact path="/shop">
        <ShopContainer />
      </Route>
      <Route exact path="/cart">
        <CartContainer />
      </Route>
    </div>
      </Switch>
    </Router>
  );
}

export default App;
