// import React from "react";
// import "./Sidebar.css";
// import "./AdminDashboard"
// import { Link } from "react-router-dom";
// const Sidebar = () => {
//   return (
//     <div className="sidebar">
//       <h2>Admin Panel</h2>
//       <ul>
//         {/* <li><a href="/admin-dashboard">Dashboard</a></li>
//         <li><a href="/add-medicine">Add Medicine</a></li>
//         <li><a href="/orders">Orders</a></li> */}
//         <li><Link to="/admin-dashboard">Dashboard</Link></li>
// <li><Link to="/add-medicine">Add Medicine</Link></li>
// <li><Link to="/orders">Orders</Link></li>
//       </ul>
//     </div>
//   );
// };

// export default Sidebar;

import React from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css"
const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <>
      {/* Mobile Toggle Button */}
      <button className="menu-btn1" onClick={toggleSidebar}>
        ☰
      </button>

      <div className={`sidebar ${isOpen ? "active" : ""}`}>
        <h2>Admin Panel</h2>
        <ul>
          <li><Link to="/admin-dashboard">Dashboard</Link></li>
          <li><Link to="/admin-add-medicine">Add Medicine</Link></li>
          <li><Link to="/add-manage-medicines">Manage Medicines</Link></li>
          <li><Link to="/add-visit">Add Visit</Link></li>
          <li><Link to="/add-patient-records">Patient Records</Link></li>
          <li><Link to="/orders">Orders</Link></li>
        </ul>
      </div>
    </>
  );
};

export default Sidebar;