import Form from "./components/Form";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import { MainDiv } from "./styled-components/FormStyle";
import Home from "./components/Home";
import Dashboard from "./components/Dashboard";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

function App() {
  return (
  <Router>
    <Switch>
   
      <MainDiv>
      <Header />
      <Sidebar />
      <Route path="/form">
        <Form />
      </Route>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/dashboard">
        <Dashboard />
      </Route>
      </MainDiv>
  </Switch>
    </Router>
  );
}

export default App;
