
import './App.css';
import Navbar from './components/Navbar';
import Shop from './components/Shop';
import Cart from './components/Cart';
import About from './components/About';

import { useSelector } from "react-redux";
import {BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom";

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
        <Shop />
      </Route>
      <Route exact path="/cart">
        <Cart />
      </Route>
    </div>
      </Switch>
    </Router>
  );
}

export default App;
