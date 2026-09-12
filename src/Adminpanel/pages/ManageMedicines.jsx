// import React, { useEffect, useState } from "react";
// import Sidebar from "./Sidebar";
// import { db } from "../../firebase";
// import "./ManageMedicines.css"
// import {
//   collection,
//   getDocs,
//   deleteDoc,
//   doc,
// } from "firebase/firestore";
// import { useNavigate } from "react-router-dom";

// const ManageMedicines = () => {
//   const [medicines, setMedicines] = useState([]);
//   const navigate = useNavigate();

//   const [isOpen, setIsOpen] = useState(false);
//   const toggleSidebar = () => setIsOpen(!isOpen);

//   useEffect(() => {
//     fetchData();
//   }, []);

//   const fetchData = async () => {
//     const snapshot = await getDocs(collection(db, "medicines"));

//     const data = snapshot.docs.map((doc) => ({
//       id: doc.id,
//       ...doc.data(),
//     }));

//     setMedicines(data);
//   };

//   const deleteMedicine = async (id) => {
//     await deleteDoc(doc(db, "medicines", id));
//     fetchData();
//   };

//   return (
//     <div className="dashboard-container">
//       <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />

//       <div className="dashboard-content">
//         <h1>Manage Medicines</h1>

//         {medicines.map((med) => (
//           <div key={med.id} style={{ marginBottom: "10px" }}>
//             <b>{med.name}</b> - ₹{med.price} (Stock: {med.stock})

//             <button onClick={() => navigate(`/edit-medicine/${med.id}`)}>
//               Edit
//             </button>

//             <button onClick={() => deleteMedicine(med.id)}>
//               Delete
//             </button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ManageMedicines;


// import React, { useEffect, useState } from "react";
// import Sidebar from "./Sidebar";
// import { db } from "../../firebase";
// import "./ManageMedicines.css";
// import {
//   collection,
//   getDocs,
//   deleteDoc,
//   doc,
// } from "firebase/firestore";
// import { useNavigate } from "react-router-dom";

// const ManageMedicines = () => {
//   const [medicines, setMedicines] = useState([]);
//   const navigate = useNavigate();

//   const [isOpen, setIsOpen] = useState(false);
//   const toggleSidebar = () => setIsOpen(!isOpen);

//   useEffect(() => {
//     fetchData();
//   }, []);

//   const fetchData = async () => {
//     try {
//       const snapshot = await getDocs(collection(db, "medicines"));

//       const data = snapshot.docs.map((doc) => ({
//         id: doc.id,
//         ...doc.data(),
//       }));

//       setMedicines(data);
//     } catch (error) {
//       console.error("Error fetching medicines:", error);
//     }
//   };

//   const deleteMedicine = async (id) => {
//     if (!window.confirm("Are you sure you want to delete?")) return;

//     try {
//       await deleteDoc(doc(db, "medicines", id));
//       fetchData();
//     } catch (error) {
//       console.error("Delete error:", error);
//     }
//   };

//   return (
//     <div className="dashboard-container">
//       <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />

//       <div className="dashboard-content">
//         <h1>Manage Medicines</h1>

//         {medicines.length === 0 ? (
//           <p>No medicines found</p>
//         ) : (
//           medicines.map((med) => (
//             <div key={med.id} className="medicine-card">

//               <div className="med-info">
//                 <span className="med-name">{med.name}</span>
//                 <span className="med-details">
//                   ₹{med.price} | Stock: {med.stock}
//                 </span>

//                 {/* 🔥 Low stock alert */}
//                 {med.stock < 10 && (
//                   <span className="low-stock">Low Stock ⚠️</span>
//                 )}
//               </div>

//               <div className="med-actions">
//                 <button
//                   className="edit-btn"
//                   onClick={() => navigate(`/edit-medicine/${med.id}`)}
//                 >
//                   Edit
//                 </button>

//                 <button
//                   className="delete-btn"
//                   onClick={() => deleteMedicine(med.id)}
//                 >
//                   Delete
//                 </button>
//               </div>

//             </div>
//           ))
//         )}
//       </div>
//     </div>
//   );
// };

// export default ManageMedicines;


import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import { db } from "../../firebase";
import "./ManageMedicines.css";
import {
  collection,
  getDocs,
  deleteDoc,
  doc,
} from "firebase/firestore";
import { useNavigate } from "react-router-dom";

const ManageMedicines = () => {
  const [medicines, setMedicines] = useState([]);
  const [search, setSearch] = useState(""); // 🔥 search state
  const navigate = useNavigate();

  const [isOpen, setIsOpen] = useState(false);
  const toggleSidebar = () => setIsOpen(!isOpen);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const snapshot = await getDocs(collection(db, "medicines"));

      const data = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      setMedicines(data);
    } catch (error) {
      console.error("Error fetching medicines:", error);
    }
  };

  const deleteMedicine = async (id) => {
    if (!window.confirm("Are you sure you want to delete?")) return;

    try {
      await deleteDoc(doc(db, "medicines", id));
      fetchData();
    } catch (error) {
      console.error("Delete error:", error);
    }
  };

  // 🔍 FILTER LOGIC
  const filteredMedicines = medicines.filter((med) =>
    med.name?.toLowerCase().includes(search.toLowerCase()) ||
    med.brand?.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="dashboard-container">
      <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />

      <div className="dashboard-content">
        <h1>Manage Medicines</h1>

        {/* 🔍 SEARCH INPUT */}
        <input
          type="text"
          placeholder="Search medicine by name or brand..."
          className="search-input"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        {filteredMedicines.length === 0 ? (
          <p>No medicines found</p>
        ) : (
          filteredMedicines.map((med) => (
            <div key={med.id} className="medicine-card">

              <div className="med-info">
                <span className="med-name">{med.name}</span>
                <span className="med-details">
                  ₹{med.price} | Stock: {med.stock}
                </span>

                {med.stock < 10 && (
                  <span className="low-stock">Low Stock ⚠️</span>
                )}
              </div>

              <div className="med-actions">
                <button
                  className="edit-btn"
                  onClick={() => navigate(`/add-edit-medicine/${med.id}`)}
                >
                  Edit
                </button>

                <button
                  className="delete-btn"
                  onClick={() => deleteMedicine(med.id)}
                >
                  Delete
                </button>
              </div>

            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default ManageMedicines;


