import React from "react";
import { Outlet, NavLink, useNavigate } from "react-router-dom";
import "../globalSidebar.css";

const Layout = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear any stored data if needed
    localStorage.clear(); // optional
    // Redirect to login page
    navigate("/", { replace: true });
  };

  return (
    <div className="app-layout">
      <aside className="app-sidebar">
        <div className="logo">
          <img src="/LOGO.jpg" alt="logo" className="logo-img" />
          <span className="logo-text">TravelZen AI</span>
        </div>
        <div className="nav-wrapper">
          <ul className="nav-list">
            <li>
              <NavLink to="/home">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/MyTrip">My Trips</NavLink>
            </li>
            <li>
              <NavLink to="/memories">Memories</NavLink>
            </li>
            <li>
              <NavLink to="/journal">Journal</NavLink>
            </li>
            <li>
              <NavLink to="/budget">Budget</NavLink>
            </li>
            <li>
              <NavLink to="/profile">Profile</NavLink>
            </li>
            <li>
              <NavLink to="/editpreferences">Edit Preferences</NavLink>
            </li>
          </ul>
              <button onClick={handleLogout} className="nav-item logout-item" >Logout</button>
        </div>    
      </aside>

      <main className="app-main">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;