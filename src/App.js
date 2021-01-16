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
          <Route path="/odder">
          <Odder></Odder>
          </Route>
          

          <Route path="/service">
            <ServiceLIst></ServiceLIst>
          </Route>
          <Route path="/review">
            <ClientReview></ClientReview>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
