// import React from "react";
// import { Outlet, NavLink, useNavigate } from "react-router-dom";
// import "../globalSidebar.css";

// const Layout = () => {
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     // Clear any stored data if needed
//     localStorage.clear(); // optional
//     // Redirect to login page
//     navigate("/", { replace: true });
//   };

//   return (
//     <div className="app-layout">
//       <aside className="app-sidebar">
//         <div className="logo">
//           <img src="/LOGO.jpg" alt="logo" className="logo-img" />
//           <span className="logo-text">TravelZen AI</span>
//         </div>
//         <div className="nav-wrapper">
//           <ul className="nav-list">
//             <li>
//               <NavLink to="/home">Home</NavLink>
//             </li>
//             <li >
//               <NavLink to="/MyTrip">My Trips</NavLink>
//             </li>
//             <li>
//               <NavLink to="/memories">Memories</NavLink>
//             </li>
//             <li>
//               <NavLink to="/journal">Journal</NavLink>
//             </li>
//             <li>
//               <NavLink to="/budget">Budget</NavLink>
//             </li>
//             <li>
//               <NavLink to="/profile">Profile</NavLink>
//             </li>
//             <li>
//               <NavLink to="/editpreferences">Edit Preferences</NavLink>
//             </li>
//           </ul>
//               <button onClick={handleLogout} className="nav-item logout-item" >Logout</button>
//         </div>    
//       </aside>

//       <main className="app-main">
//         <Outlet />
//       </main>
//     </div>
//   );
// };

// export default Layout;


import React from "react";
import { Outlet, NavLink, useNavigate, useLocation } from "react-router-dom";
import "../globalSidebar.css";

const Layout = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const hideLogoRoutes = [
    "/home",
    "/MyTrip",
    "/memories",
    "/journal",
    "/budget",
    "/profile",
    "/editpreferences"
  ];

  const hideLogo = hideLogoRoutes.some(route =>
    location.pathname.startsWith(route)
  );

  const handleLogout = () => {
    localStorage.clear();
    navigate("/", { replace: true });
  };

  return (
    <div className="app-layout">

      <aside className="app-sidebar">

        {/* Logo or Placeholder */}
        {hideLogo ? (
          <div className="logo-placeholder"></div>
        ) : (
          <div className="logo">
            <img src="/LOGO.jpg" alt="logo" className="logo-img" />
            <span className="logo-text">TravelZen AI</span>
          </div>
        )}

        {/* Navigation */}
        <div className="nav-wrapper">
          <ul className="sidebar-menu">
            <li className="sidebar-item nav-home">
              <NavLink to="/home">Home</NavLink>
            </li>

            <li className="sidebar-item nav-mytrips">
              <NavLink to="/MyTrip">My Trips</NavLink>
            </li>

            <li className="sidebar-item nav-memories">
              <NavLink to="/memories">Memories</NavLink>
            </li>

            <li className="sidebar-item nav-journal">
              <NavLink to="/journal">Journal</NavLink>
            </li>

            <li className="sidebar-item nav-budget">
              <NavLink to="/budget">Budget</NavLink>
            </li>

            <li className="sidebar-item nav-editpreferences">
              <NavLink to="/editpreferences">Edit Preferences</NavLink>
            </li>

            <li className="sidebar-item nav-profile">
              <NavLink to="/profile">Profile</NavLink>
            </li>

            {/* LOGOUT — identical design */}
            <li className="sidebar-item nav-logout" onClick={handleLogout}>
              <span>Logout</span>
            </li>
          </ul>
        </div>
      </aside>
      <main className="app-main">
        <Outlet />
      </main>
    </div>
  );
};
export default Layout;
