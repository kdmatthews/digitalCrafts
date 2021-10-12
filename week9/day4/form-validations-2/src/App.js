import Login from "./components/Login";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import { MainDiv } from "./styled-components/FormStyle";
import Home from "./components/Home";
import Dashboard from "./components/Dashboard";
import {BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom";
import ErrorPage from "./components/ErrorPage";
import Account from "./components/Account";
import Garage from "./components/Garage";

import {useState} from "react"
import { useSelector } from "react-redux";
function App() {
  const[viewSidebar, setViewSidebar] = useState(true)
  const [loggedIn, setLoggedIn] = useState(false);
 
  const register = true;
  const userInfo = useSelector((state)=> state.LoginInfo.loginUser)
  const user = JSON.parse(localStorage.getItem('supabase.auth.token'));
  console.log({ user })
    return (
  <Router>
    <Switch>
      {userInfo ?  (
        <>
      
      <MainDiv>
      <Header viewSidebar={viewSidebar} setViewSidebar={setViewSidebar}/>
      {/* {viewSidebar ? <Sidebar viewSidebar={viewSidebar}/> : <></>} */}
      <Sidebar viewSidebar={viewSidebar}/>
     
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/dashboard">
        <Dashboard />
      </Route>
      <Route path="/account">
        <Account />
      </Route>
      <Route path="/garage">
        <Garage />
      </Route>
      {/* <Route path="*">
        <Redirect to="/errorpage" />

      </Route> */}
      <Route path="/errorpage">
        <ErrorPage />
      </Route>
      </MainDiv> </> ) : (
        <>
    <Route path="/login">
        <Login />
      </Route>
      <Route path="/register">
        <Login register={register}/>
      </Route> </>)}

  
  </Switch>
    </Router>
  );
}

export default App;
