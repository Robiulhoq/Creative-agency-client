import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/HomePage/Home/Home';
import Odder from './components/OdderPage/Odder/Odder';
import ServiceLIst from './components/OdderPage/Odder/ServiceList/ServiceLIst';
import ClientReview from './components/OdderPage/Odder/ClientReview/ClientReview';
import Login from './components/Login/Login';
import { createContext, useState } from 'react';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Admin from './components/AdminPages/Admin/Admin';
import OdderList from './components/AdminPages/OdderList/OdderList';
import MakeAdmin from './components/AdminPages/MakeAdmin/MakeAdmin';
import AddService from './components/AdminPages/AddService/AddService';


export const UserContext = createContext();
function App() {
  const [newLogin, setNewLogin] = useState({
    user: '',
    email: ''
  })
  return (
    <UserContext.Provider value={[newLogin, setNewLogin]}>
      <Router>
        <Switch>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route exact path="/">
            <Home></Home>
          </Route>
          {/* <Route path="/odder">
          <Odder></Odder>
          </Route> */}
          <PrivateRoute path="/odder">
            <Odder></Odder>
          </PrivateRoute>
          {/* <PrivateRoute path="/service">
            <ServiceLIst></ServiceLIst>
          </PrivateRoute> */}
          <PrivateRoute path="/service">
            <ServiceLIst></ServiceLIst>
          </PrivateRoute>
          <PrivateRoute path="/review">
            <ClientReview></ClientReview>
          </PrivateRoute>
          <Route path="/login">
            <Login></Login>
          </Route>
          <PrivateRoute path="/odderList">
            <OdderList></OdderList>
          </PrivateRoute>
          <PrivateRoute path="/MakeAdmin">
            <MakeAdmin></MakeAdmin>
          </PrivateRoute>
          <PrivateRoute path="/addService">
            <AddService></AddService>
          </PrivateRoute>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
