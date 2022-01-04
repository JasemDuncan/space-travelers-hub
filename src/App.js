import React, {Fragment} from 'react';
// import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import { NavLink } from 'react-router-dom';
import Rockets from './components/Rockets';
import Missions from './components/Missions';
import MyProfile from './components/MyProfile';

function App() {
  let activeStyle = {
    textDecoration: "underline"
  };

  let activeClassName = "underline"
  return (
    <Router>
      <Fragment>
        <div className="container mt-5"> 
          <div className='btn-group'>
            <NavLink to="/" className="nav-link" style={({ isActive }) => isActive ? activeStyle : undefined}>
              Rockets
            </NavLink>
            <NavLink  to="/Missions" className="nav-link" style={({ isActive }) => isActive ? activeStyle : undefined}>
              Missions
            </NavLink>
            <NavLink  to="/MyProfile" className="nav-link" style={({ isActive }) => isActive ? activeStyle : undefined}>
              MyProfile
            </NavLink>
          </div>
          <hr></hr>
          <Routes>
            <Route path="/MyProfile" element={<MyProfile/>}>              
            </Route>
            <Route path="/Missions" element={<Missions/>}>              
            </Route>
            <Route path="/" element={<Rockets/>}>              
            </Route>
          </Routes>         
        </div>    
      </Fragment>  
    </Router>
  );
}

export default App;
