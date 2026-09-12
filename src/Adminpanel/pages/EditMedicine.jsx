// import React, { useEffect, useState } from "react";
// import Sidebar from "./Sidebar";
// import { db } from "../../firebase";
// import {
//   doc,
//   getDoc,
//   updateDoc,
// } from "firebase/firestore";
// import { useParams, useNavigate } from "react-router-dom";

// const EditMedicine = () => {
//   const { id } = useParams();
//   const navigate = useNavigate();

//   const [data, setData] = useState({
//     name: "",
//     brand: "",
//     description: "",
//     price: "",
//     stock: "",
//   });

//   const [isOpen, setIsOpen] = useState(false);
//   const toggleSidebar = () => setIsOpen(!isOpen);

//   useEffect(() => {
//     fetchMedicine();
//   }, []);

//   const fetchMedicine = async () => {
//     const docRef = doc(db, "medicines", id);
//     const snap = await getDoc(docRef);

//     if (snap.exists()) {
//       setData(snap.data());
//     }
//   };

//   const handleUpdate = async (e) => {
//     e.preventDefault();

//     await updateDoc(doc(db, "medicines", id), {
//       ...data,
//       price: Number(data.price),
//       stock: Number(data.stock),
//     });

//     alert("Medicine updated ✅");
//     navigate("/manage-medicines");
//   };

//   return (
//     <div className="dashboard-container">
//       <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />

//       <div className="dashboard-content">
//         <h1>Edit Medicine</h1>

//         <form onSubmit={handleUpdate}>
//           <input
//             value={data.name}
//             onChange={(e) =>
//               setData({ ...data, name: e.target.value })
//             }
//           />

//           <input
//             value={data.brand}
//             onChange={(e) =>
//               setData({ ...data, brand: e.target.value })
//             }
//           />

//           <textarea
//             value={data.description}
//             onChange={(e) =>
//               setData({ ...data, description: e.target.value })
//             }
//           />

//           <input
//             type="number"
//             value={data.price}
//             onChange={(e) =>
//               setData({ ...data, price: e.target.value })
//             }
//           />

//           <input
//             type="number"
//             value={data.stock}
//             onChange={(e) =>
//               setData({ ...data, stock: e.target.value })
//             }
//           />

//           <button type="submit">Update</button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default EditMedicine;


import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import { db } from "../../firebase";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { useParams, useNavigate } from "react-router-dom";
import "./EditMedicine.css";

const EditMedicine = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [data, setData] = useState({
    name: "",
    brand: "",
    description: "",
    price: "",
    stock: "",
     priceType: "", // ✅ add this
  });

  const [isOpen, setIsOpen] = useState(false);
  const toggleSidebar = () => setIsOpen(!isOpen);

  useEffect(() => {
    const fetchMedicine = async () => {
      const docRef = doc(db, "medicines", id);
      const snap = await getDoc(docRef);

      if (snap.exists()) {
        setData(snap.data());
      }
    };

    fetchMedicine();
  }, [id]);

  const handleUpdate = async (e) => {
    e.preventDefault();

    await updateDoc(doc(db, "medicines", id), {
      ...data,
      price: Number(data.price),
      stock: Number(data.stock),
    });

    alert("Medicine updated ✅");
    navigate("/add-manage-medicines");
  };

  return (
    <div className="dashboard-container">
      <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />

      <div className="dashboard-content">
        <div className="edit-container">
          <h1>Edit Medicine</h1>

          <form className="edit-form" onSubmit={handleUpdate}>
            
            <div className="form-group">
              <label>Medicine Name</label>
              <input
                value={data.name}
                onChange={(e) =>
                  setData({ ...data, name: e.target.value })
                }
              />
            </div>

            <div className="form-group">
              <label>Brand</label>
              <input
                value={data.brand}
                onChange={(e) =>
                  setData({ ...data, brand: e.target.value })
                }
              />
            </div>

            <div className="form-group">
              <label>Description</label>
              <textarea
                value={data.description}
                onChange={(e) =>
                  setData({ ...data, description: e.target.value })
                }
              />
            </div>

            <div className="form-group">
              <label>Price (₹)</label>
              <input
                type="number"
                value={data.price}
                onChange={(e) =>
                  setData({ ...data, price: e.target.value })
                }
              />
            </div>

            <div className="form-group">
  <label>Price Type</label>
  <select
    value={data.priceType}
    onChange={(e) =>
      setData({ ...data, priceType: e.target.value })
    }
  >
    <option value="">Select Price Type</option>
    <option value="per tablet">Per Tablet</option>
    <option value="per piece">Per Piece</option>
    <option value="per strip">Per Strip</option>
    <option value="per strip">Per kg</option>
     <option value="per strip">Per half-kg</option>
  </select>
</div>

            <div className="form-group">
              <label>Stock Quantity</label>
              <input
                type="number"
                value={data.stock}
                onChange={(e) =>
                  setData({ ...data, stock: e.target.value })
                }
              />
            </div>

            <button type="submit" className="update-btn">
              Update Medicine
            </button>

          </form>
        </div>
      </div>
    </div>
  );
};

export default EditMedicine;