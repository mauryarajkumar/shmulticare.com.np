// import React, { useEffect, useState } from "react";
// import Sidebar from "./Sidebar";
// import { db } from "../../firebase";
// import { collection, getDocs } from "firebase/firestore";
// import "./PatientRecords.css";

// const PatientRecords = () => {
//   const [records, setRecords] = useState([]);

//   const [isOpen, setIsOpen] = useState(false);
//   const toggleSidebar = () => setIsOpen(!isOpen);

//   useEffect(() => {
//     const fetchRecords = async () => {
//       const snapshot = await getDocs(collection(db, "visits"));

//       const data = snapshot.docs.map((doc) => ({
//         id: doc.id,
//         ...doc.data(),
//       }));

//       setRecords(data);
//     };

//     fetchRecords();
//   }, []);

//   return (
//     <div className="dashboard-container">
//       <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />

//       <div className="dashboard-content">
//         <h1>Patient Records</h1>

//         <div className="table-container">
//           <table>
//             <thead>
//               <tr>
//                 <th>Patient</th>
//                 <th>Doctor</th>
//                 <th>Date</th>
//                 <th>Charge</th>
//                 <th>Status</th>
//               </tr>
//             </thead>

//             <tbody>
//               {records.map((rec) => (
//                 <tr key={rec.id}>
//                   <td>{rec.patientName}</td>
//                   <td>{rec.doctorName}</td>
//                   <td>{new Date(rec.visitDate).toLocaleDateString()}</td>
//                   <td>₹{rec.opdCharge}</td>
//                   <td>
//                     {rec.isFollowUp ? (
//                       <span className="follow">Follow-up</span>
//                     ) : (
//                       <span className="new">New</span>
//                     )}
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PatientRecords;

import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import { db } from "../../firebase";
import { collection, getDocs } from "firebase/firestore";
import "./PatientRecords.css";

const PatientRecords = () => {
  const [records, setRecords] = useState([]);
  const [search, setSearch] = useState("");

  const [isOpen, setIsOpen] = useState(false);
  const toggleSidebar = () => setIsOpen(!isOpen);

  useEffect(() => {
    const fetchRecords = async () => {
      const snapshot = await getDocs(collection(db, "visits"));

      const data = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      setRecords(data);
    };

    fetchRecords();
  }, []);

  // 🔍 Filter records
  const filteredRecords = records.filter((rec) =>
    rec.patientName?.toLowerCase().includes(search.toLowerCase()) ||
    rec.patientId?.toLowerCase().includes(search.toLowerCase()) ||
    rec.contact?.includes(search)
  );

  return (
    <div className="dashboard-container">
      <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />

      <div className="dashboard-content">
        <h1>Patient Records</h1>

        {/* 🔍 Search */}
        <input
          type="text"
          placeholder="Search by name / ID / contact..."
          className="search-input"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Patient</th>
                <th>Age</th>
                <th>Gender</th>
                <th>Contact</th>
                <th>Doctor</th>
                <th>Date</th>
                <th>Charge</th>
                <th>Status</th>
              </tr>
            </thead>

            <tbody>
              {filteredRecords.map((rec) => (
                <tr key={rec.id}>
                  <td>{rec.patientId}</td>
                  <td>{rec.patientName}</td>
                  <td>{rec.age}</td>
                  <td>{rec.gender}</td>
                  <td>{rec.contact}</td>
                  <td>{rec.doctorName}</td>
                  <td>
                    {new Date(rec.visitDate).toLocaleDateString()}
                  </td>
                  <td>₹{rec.opdCharge}</td>
                  <td>
                    {rec.isFollowUp ? (
                      <span className="follow">Follow-up</span>
                    ) : (
                      <span className="new">New</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {filteredRecords.length === 0 && (
            <p style={{ marginTop: "10px" }}>No records found</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default PatientRecords;