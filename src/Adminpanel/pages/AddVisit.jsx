

// import React, { useState } from "react";
// import { addVisit } from "./visitService";
// import "./AddVisit.css";
// import Sidebar from "./Sidebar";

// const AddVisit = () => {
//   const [patientName, setPatientName] = useState("");
//   const [doctorName, setDoctorName] = useState("");

//   // 🔥 Sidebar state (same as AddMedicine)
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleSidebar = () => {
//     setIsOpen(!isOpen);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!patientName || !doctorName) {
//       alert("Fill all fields");
//       return;
//     }

//     await addVisit(patientName, doctorName);

//     setPatientName("");
//     setDoctorName("");
//   };

//   return (
//     <div className="dashboard-container">
      
//       {/* 🔥 Sidebar added */}
//       <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />

//       <div className="dashboard-content">
//         <div className="visit-container">
//           <h2>Add Patient Visit</h2>

//           <form className="visit-form" onSubmit={handleSubmit}>
//             <input
//               type="text"
//               placeholder="Patient Name"
//               value={patientName}
//               onChange={(e) => setPatientName(e.target.value)}
//             />

//             <input
//               type="text"
//               placeholder="Doctor Name"
//               value={doctorName}
//               onChange={(e) => setDoctorName(e.target.value)}
//             />

//             <button type="submit">Add Visit</button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AddVisit;

import React, { useState } from "react";
import { addVisit } from "./visitService";
import "./AddVisit.css";
import Sidebar from "./Sidebar";

const AddVisit = () => {
  const [patientName, setPatientName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [contact, setContact] = useState("");
  const [address, setAddress] = useState("");
  const [emergencyContact, setEmergencyContact] = useState("");
  const [doctorName, setDoctorName] = useState("");

  const [isOpen, setIsOpen] = useState(false);
  const toggleSidebar = () => setIsOpen(!isOpen);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!patientName || !age || !gender || !contact || !doctorName) {
      alert("Please fill required fields");
      return;
    }

    await addVisit({
      patientName,
      age,
      gender,
      contact,
      address,
      emergencyContact,
      doctorName,
    });

    // reset
    setPatientName("");
    setAge("");
    setGender("");
    setContact("");
    setAddress("");
    setEmergencyContact("");
    setDoctorName("");
  };

  return (
    <div className="dashboard-container">
      <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />

      <div className="dashboard-content">
        <div className="visit-container">
          <h2>Add Patient Visit</h2>

          <form className="visit-form" onSubmit={handleSubmit}>
            
            {/* 👤 Patient Info */}
            <input
              type="text"
              placeholder="Full Name"
              value={patientName}
              onChange={(e) => setPatientName(e.target.value)}
            />

            <input
              type="number"
              placeholder="Age"
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />

            <select value={gender} onChange={(e) => setGender(e.target.value)}>
              <option value="">Select Gender</option>
              <option>Male</option>
              <option>Female</option>
              <option>Other</option>
            </select>

            <input
              type="text"
              placeholder="Contact Number"
              value={contact}
              onChange={(e) => setContact(e.target.value)}
            />

            <input
              type="text"
              placeholder="Address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />

            <input
              type="text"
              placeholder="Emergency Contact"
              value={emergencyContact}
              onChange={(e) => setEmergencyContact(e.target.value)}
            />

            {/* 👨‍⚕️ Doctor */}
            <input
              type="text"
              placeholder="Doctor Name"
              value={doctorName}
              onChange={(e) => setDoctorName(e.target.value)}
            />

            <button type="submit">Add Visit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddVisit;