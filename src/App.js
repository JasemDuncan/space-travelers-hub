import React, { Fragment } from 'react';
// import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from 'react-router-dom';
import Rockets from './components/Rockets';
import Missions from './components/Missions';
import MyProfile from './components/MyProfile';

function App() {
  const activeStyle = {
    textDecoration: 'underline',
  };

  return (
    <Router>
      <>
        <div className="container mt-5">
          <div className="btn-group">
            <NavLink to="/" className="nav-link" style={({ isActive }) => (isActive ? activeStyle : undefined)}>
              Rockets
            </NavLink>
            <NavLink to="/Missions" className="nav-link" style={({ isActive }) => (isActive ? activeStyle : undefined)}>
              Missions
            </NavLink>
            <NavLink to="/MyProfile" className="nav-link" style={({ isActive }) => (isActive ? activeStyle : undefined)}>
              MyProfile
            </NavLink>
          </div>
          <hr />
          <Routes>
            <Route path="/MyProfile" element={<MyProfile />} />
            <Route path="/Missions" element={<Missions />} />
            <Route path="/" element={<Rockets />} />
          </Routes>
        </div>
      </>
    </Router>
  );
}

export default App;
