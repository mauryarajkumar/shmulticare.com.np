

// import React, { useState } from "react";
// import Sidebar from "./Sidebar";
// import { db } from "../../firebase";
// import {
//   collection,
//   addDoc,
//   getDocs,
//   query,
//   where,
//   updateDoc,
//   doc,
//   increment,
// } from "firebase/firestore";
// import "./AddMedicine.css";

// const AddMedicine = () => {
//   const [name, setName] = useState("");
//   const [brand, setBrand] = useState("");
//   const [description, setDescription] = useState("");
//   const [price, setPrice] = useState("");
//   const [stock, setStock] = useState("");
//   const [image, setImage] = useState(null);

//   const [isOpen, setIsOpen] = useState(false);
//   const toggleSidebar = () => setIsOpen(!isOpen);

//   // 🔥 Upload to Cloudinary
//   const uploadImage = async () => {
//     if (!image) return null;

//     const formData = new FormData();
//     formData.append("file", image);
//     formData.append("upload_preset", "shmulticarepreset");

//     try {
//       const res = await fetch(
//         "https://api.cloudinary.com/v1_1/dc6k0g1l2/image/upload",
//         {
//           method: "POST",
//           body: formData,
//         }
//       );

//       const data = await res.json();
//       return data.secure_url;
//     } catch (error) {
//       console.error("Image upload error:", error);
//       return null;
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     // 🔴 Image size validation
//     if (image && image.size > 500 * 1024) {
//       alert("Image exceeds 500KB ❌");
//       return;
//     }

//     if (!name || !brand || !description || !price || !stock || !image) {
//       alert("Please fill all fields");
//       return;
//     }

//     try {
//       // 🔥 Normalize (avoid duplicates like Paracetamol vs paracetamol)
//       const normalizedName = name.toLowerCase().trim();
//       const normalizedBrand = brand.toLowerCase().trim();

//       // 🔍 Check existing medicine
//       const q = query(
//         collection(db, "medicines"),
//         where("name", "==", normalizedName),
//         where("brand", "==", normalizedBrand)
//       );

//       const snapshot = await getDocs(q);

//       // 🔥 If exists → UPDATE STOCK
//       if (!snapshot.empty) {
//         const docId = snapshot.docs[0].id;

//         await updateDoc(doc(db, "medicines", docId), {
//           stock: increment(Number(stock)),
//         });

//         alert("Medicine already exists ✅ Stock updated");

//         // reset
//         setName("");
//         setBrand("");
//         setDescription("");
//         setPrice("");
//         setStock("");
//         setImage(null);

//         return;
//       }

//       // 1️⃣ Upload image
//       const imageUrl = await uploadImage();

//       // 2️⃣ Add new medicine
//       await addDoc(collection(db, "medicines"), {
//         name: normalizedName,
//         brand: normalizedBrand,
//         description,
//         price: Number(price),
//         stock: Number(stock),
//         image: imageUrl,
//         createdAt: new Date(),
//       });

//       alert("Medicine added successfully ✅");

//       // Reset form
//       setName("");
//       setBrand("");
//       setDescription("");
//       setPrice("");
//       setStock("");
//       setImage(null);

//     } catch (error) {
//       console.error(error);
//       alert("Error adding medicine ❌");
//     }
//   };

//   return (
//     <div className="dashboard-container">
//       <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />

//       <div className="dashboard-content">
//         <h1 className="dashboard-title">Add Medicine</h1>

//         <div className="add-medicine-container">
//           <form className="add-medicine-form" onSubmit={handleSubmit}>
            
//             <input
//               type="text"
//               placeholder="Medicine Name"
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//             />

//             <input
//               type="text"
//               placeholder="Brand (Company)"
//               value={brand}
//               onChange={(e) => setBrand(e.target.value)}
//             />

//             <textarea
//               placeholder="Description"
//               value={description}
//               onChange={(e) => setDescription(e.target.value)}
//             />

//             <input
//               type="number"
//               placeholder="Price"
//               value={price}
//               onChange={(e) => setPrice(e.target.value)}
//             />



//             <input
//               type="number"
//               placeholder="Stock Quantity"
//               value={stock}
//               onChange={(e) => setStock(e.target.value)}
//             />

//             {/* 🔥 Image Upload */}
//             <input
//               type="file"
//               accept="image/*"
//               onChange={(e) => {
//                 const file = e.target.files[0];
//                 if (!file) return;

//                 if (file.size > 500 * 1024) {
//                   alert("Image must be under 500KB ❌");
//                   e.target.value = null;
//                   return;
//                 }

//                 setImage(file);
//               }}
//             />

//             {/* 🔥 Preview */}
//             {image && (
//               <>
//                 <img
//                   src={URL.createObjectURL(image)}
//                   alt="preview"
//                   style={{ width: "100px", marginTop: "10px" }}
//                 />
//                 <p style={{ fontSize: "12px" }}>
//                   Size: {(image.size / 1024).toFixed(2)} KB
//                 </p>
//               </>
//             )}

//             <button type="submit">Add Medicine</button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AddMedicine;


import React, { useState } from "react";
import Sidebar from "./Sidebar";
import { db } from "../../firebase";
import {
  collection,
  addDoc,
  getDocs,
  query,
  where,
  updateDoc,
  doc,
  increment,
} from "firebase/firestore";
import "./AddMedicine.css";

const AddMedicine = () => {
  const [name, setName] = useState("");
  const [brand, setBrand] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [priceType, setPriceType] = useState(""); // 🔥 NEW
  const [stock, setStock] = useState("");
  const [image, setImage] = useState(null);

  const [isOpen, setIsOpen] = useState(false);
  const toggleSidebar = () => setIsOpen(!isOpen);

  // 🔥 Upload to Cloudinary
  const uploadImage = async () => {
    if (!image) return null;

    const formData = new FormData();
    formData.append("file", image);
    formData.append("upload_preset", "shmulticarepreset");

    try {
      const res = await fetch(
        "https://api.cloudinary.com/v1_1/dc6k0g1l2/image/upload",
        {
          method: "POST",
          body: formData,
        }
      );

      const data = await res.json();
      return data.secure_url;
    } catch (error) {
      console.error("Image upload error:", error);
      return null;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // 🔴 Image size validation
    if (image && image.size > 500 * 1024) {
      alert("Image exceeds 500KB ❌");
      return;
    }

    if (
      !name ||
      !brand ||
      !description ||
      !price ||
      !stock ||
      !image ||
      !priceType
    ) {
      alert("Please fill all fields");
      return;
    }

    try {
      // 🔥 Normalize
      const normalizedName = name.toLowerCase().trim();
      const normalizedBrand = brand.toLowerCase().trim();

      // 🔍 Check duplicate
      const q = query(
        collection(db, "medicines"),
        where("name", "==", normalizedName),
        where("brand", "==", normalizedBrand)
      );

      const snapshot = await getDocs(q);

      // 🔥 If exists → update stock
      if (!snapshot.empty) {
        const docId = snapshot.docs[0].id;

        await updateDoc(doc(db, "medicines", docId), {
          stock: increment(Number(stock)),
        });

        alert("Medicine already exists ✅ Stock updated");

        // reset
        setName("");
        setBrand("");
        setDescription("");
        setPrice("");
        setPriceType("");
        setStock("");
        setImage(null);

        return;
      }

      // 1️⃣ Upload image
      const imageUrl = await uploadImage();

      // 2️⃣ Save
      await addDoc(collection(db, "medicines"), {
        name: normalizedName,
        brand: normalizedBrand,
        description,
        price: Number(price),
        priceType, // 🔥 NEW FIELD
        stock: Number(stock),
        image: imageUrl,
        createdAt: new Date(),
      });

      alert("Medicine added successfully ✅");

      // reset
      setName("");
      setBrand("");
      setDescription("");
      setPrice("");
      setPriceType("");
      setStock("");
      setImage(null);

    } catch (error) {
      console.error(error);
      alert("Error adding medicine ❌");
    }
  };

  return (
    <div className="dashboard-container">
      <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />

      <div className="dashboard-content">
        <h1 className="dashboard-title">Add Medicine</h1>

        <div className="add-medicine-container">
          <form className="add-medicine-form" onSubmit={handleSubmit}>
            
            <input
              type="text"
              placeholder="Medicine Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <input
              type="text"
              placeholder="Brand (Company)"
              value={brand}
              onChange={(e) => setBrand(e.target.value)}
            />

            <textarea
              placeholder="Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />

            <input
              type="number"
              placeholder="Price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />

            {/* 🔥 PRICE TYPE */}
            <select
              value={priceType}
              onChange={(e) => setPriceType(e.target.value)}
            >
              <option value="">Select Price Type</option>
              <option value="per tablet">Per Tablet</option>
              <option value="per piece">Per Piece</option>
              <option value="per strip">Per Strip</option>
                <option value="per strip">Per kg</option>
                 <option value="per strip">Per half-kg</option>
            </select>

            <input
              type="number"
              placeholder="Stock Quantity"
              value={stock}
              onChange={(e) => setStock(e.target.value)}
            />

            {/* IMAGE */}
            <input
              type="file"
              accept="image/*"
              onChange={(e) => {
                const file = e.target.files[0];
                if (!file) return;

                if (file.size > 500 * 1024) {
                  alert("Image must be under 500KB ❌");
                  e.target.value = null;
                  return;
                }

                setImage(file);
              }}
            />

            {/* PREVIEW */}
            {image && (
              <>
                <img
                  src={URL.createObjectURL(image)}
                  alt="preview"
                  style={{ width: "100px", marginTop: "10px" }}
                />
                <p style={{ fontSize: "12px" }}>
                  Size: {(image.size / 1024).toFixed(2)} KB
                </p>
              </>
            )}

            <button type="submit">Add Medicine</button>

          </form>
        </div>
      </div>
    </div>
  );
};

export default AddMedicine;