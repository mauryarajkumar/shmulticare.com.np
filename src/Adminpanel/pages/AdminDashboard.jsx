import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import { db } from "../../firebase";
import { collection, getDocs } from "firebase/firestore";
import "./AdminDashboard.css"
const AdminDashboard = () => {
  const [medCount, setMedCount] = useState(0);
  const [orderCount, setOrderCount] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      const meds = await getDocs(collection(db, "medicines"));
      const orders = await getDocs(collection(db, "orders"));

      setMedCount(meds.size);
      setOrderCount(orders.size);
    };

    fetchData();
  }, []);

  const [isOpen, setIsOpen] = useState(true);

const toggleSidebar = () => {
  setIsOpen(!isOpen);
};

  return (
    <div className="dashboard-container">
    <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />

    <div className="dashboard-content">
      <h1 className="dashboard-title">Dashboard</h1>

      <div className="dashboard-cards">
        <div className="dashboard-card">
          <p className="card-title">Total Medicines</p>
          <h2 className="card-value">{medCount}</h2>
        </div>

        <div className="dashboard-card">
          <p className="card-title">Total Orders</p>
          <h2 className="card-value">{orderCount}</h2>
        </div>
      </div>
    </div>
  </div>
  );
};

export default AdminDashboard;