

// import React, { useState, useEffect } from "react";
// import "./MedicineStore.css";
// import { db } from "../firebase";
// import { collection, getDocs } from "firebase/firestore";

// const WHATSAPP_NUMBER = "9779821596101";

// export default function MedicineStore() {
//   const [cart, setCart] = useState([]);
//   const [medicines, setMedicines] = useState([]);

//   // 🔥 Fetch medicines from Firebase
//   useEffect(() => {
//     const fetchMedicines = async () => {
//       try {
//         const snapshot = await getDocs(collection(db, "medicines"));

//         const medsData = snapshot.docs.map((doc) => ({
//           id: doc.id,
//           ...doc.data(),
//         }));

//         setMedicines(medsData);
//       } catch (error) {
//         console.error("Error fetching medicines:", error);
//       }
//     };

//     fetchMedicines();
//   }, []);

//   // ✅ Add to Cart
//   const addToCart = (med) => {
//     const existing = cart.find((item) => item.id === med.id);

//     if (existing) {
//       const updatedCart = cart.map((item) =>
//         item.id === med.id
//           ? { ...item, quantity: item.quantity + 1 }
//           : item
//       );
//       setCart(updatedCart);
//     } else {
//       setCart([...cart, { ...med, quantity: 1 }]);
//     }
//   };

//   // ✅ WhatsApp Cart
//   const sendCartToWhatsApp = () => {
//     if (cart.length === 0) {
//       alert("Cart is empty!");
//       return;
//     }

//     let message = "🛒 *Medicine Order List*\n\n";

//     cart.forEach((item) => {
//       message += `*${item.name}*\n`;
//       message += `${item.brand}\n`;
//       message += `${item.description}\n`;
//       message += `${item.image}\n`;
//       message += `Qty: ${item.quantity}\n`;
//       message += `Price: ₹${item.price}\n\n`;
//     });

//     const total = cart.reduce(
//       (sum, item) => sum + item.price * item.quantity,
//       0
//     );

//     message += `💰 *Total: ₹${total}*\n\nPlease confirm order.`;

//     const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
//     window.open(url, "_blank");
//   };

//   // ✅ Clear Cart
//   const clearCart = () => setCart([]);

//   // ✅ Buy Now
//   const buyNowWhatsApp = (med) => {
//     const message = `🛒 *Instant Medicine Order*

// *Name:* ${med.name}
// *Brand:* ${med.brand}
// *Price:* ₹${med.price}
// *Details:* ${med.description}

// *Image:* ${med.image}

// Qty: 1

// Please confirm availability and delivery.`;

//     const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
//     window.open(url, "_blank");
//   };

//   return (
//     <div className="store-container">
//       <h2 className="title">🛒 Buy Medicines</h2>

//       {/* Cart Buttons */}
//       <button className="cart-send-btn" onClick={sendCartToWhatsApp}>
//         Send Cart ({cart.length})
//       </button>

//       <button className="clear-cart-btn" onClick={clearCart}>
//         Clear Cart
//       </button>

//       {/* Medicines Grid */}
//       <div className="medicine-grid">
//         {medicines.map((med) => (
//           <div key={med.id} className="medicine-card">
            
//             {/* 🔥 Image from Firebase/Cloudinary */}
//             <img src={med.image} alt={med.name} />


// <div className="med-content">

//   <p><span className="label">Name:</span> {med.name}</p>

//   <p><span className="label">Brand:</span> {med.brand}</p>

//   <p className="desc">
//     <span className="label">Description:</span> {med.description}
//   </p>

//   <div className="med-bottom">
//     <p>
//       {/* <span className="label">Price:</span>  */}
//       {/* <span className="price"> ₹{med.price}</span> */}


//       <p>
//   <span className="label">Price:</span>
//   <span className="price"> ₹{med.price}</span>
//   <span className="price-type">
//     ({med.priceType || "per unit"})
//   </span>
// </p>
//     </p>

   
//   </div>

// </div>




//             <button className="cart-btn" onClick={() => addToCart(med)}>
//               Add to Cart
//             </button>

//             <button
//               className="buy-now-btn"
//               onClick={() => buyNowWhatsApp(med)}
//             >
//               Buy Now
//             </button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }


// import React, { useState, useEffect } from "react";
// import "./MedicineStore.css";
// import { db } from "../firebase";
// import { collection, getDocs } from "firebase/firestore";

// const WHATSAPP_NUMBER = "9779821596101";

// export default function MedicineStore() {
//   const [cart, setCart] = useState([]);
//   const [medicines, setMedicines] = useState([]);
//   const [search, setSearch] = useState(""); // 🔍 search

//   // 🔥 Fetch medicines
//   useEffect(() => {
//     const fetchMedicines = async () => {
//       try {
//         const snapshot = await getDocs(collection(db, "medicines"));

//         const medsData = snapshot.docs.map((doc) => ({
//           id: doc.id,
//           ...doc.data(),
//         }));

//         setMedicines(medsData);
//       } catch (error) {
//         console.error("Error fetching medicines:", error);
//       }
//     };

//     fetchMedicines();
//   }, []);

//   // 🔍 FILTER
//   const filteredMedicines = medicines.filter((med) =>
//     med.name?.toLowerCase().includes(search.toLowerCase()) ||
//     med.brand?.toLowerCase().includes(search.toLowerCase())
//   );

//   // 🛒 ADD TO CART
//   const addToCart = (med) => {
//     const existing = cart.find((item) => item.id === med.id);

//     if (existing) {
//       const updatedCart = cart.map((item) =>
//         item.id === med.id
//           ? { ...item, quantity: item.quantity + 1 }
//           : item
//       );
//       setCart(updatedCart);
//     } else {
//       setCart([...cart, { ...med, quantity: 1 }]);
//     }
//   };

//   // 📲 SEND CART
//   const sendCartToWhatsApp = () => {
//     if (cart.length === 0) {
//       alert("Cart is empty!");
//       return;
//     }

//     let message = "🛒 *Medicine Order List*\n\n";

//     cart.forEach((item) => {
//       message += `*${item.name}*\n`;
//       message += `${item.brand}\n`;
//       message += `${item.description}\n`;
//       message += `Qty: ${item.quantity}\n`;
//       message += `Price: ₹${item.price} (${item.priceType})\n\n`;
//     });

//     const total = cart.reduce(
//       (sum, item) => sum + item.price * item.quantity,
//       0
//     );

//     message += `💰 *Total: ₹${total}*\n\nPlease confirm order.`;

//     const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
//     window.open(url, "_blank");
//   };

//   // 🧹 CLEAR CART
//   const clearCart = () => setCart([]);

//   // ⚡ BUY NOW
//   const buyNowWhatsApp = (med) => {
//     const message = `🛒 *Instant Medicine Order*

// *Name:* ${med.name}
// *Brand:* ${med.brand}
// *Price:* ₹${med.price} (${med.priceType})
// *Details:* ${med.description}

// Qty: 1

// Please confirm availability and delivery.`;

//     const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
//     window.open(url, "_blank");
//   };

//   return (
//     <div className="store-container">
//       <h2 className="title">🛒 Buy Medicines</h2>

//       {/* 🔍 SEARCH */}
//       <input
//         type="text"
//         placeholder="🔍 Search medicine..."
//         className="search-input"
//         value={search}
//         onChange={(e) => setSearch(e.target.value)}
//       />

//       {/* 🛒 CART */}
//       <button className="cart-send-btn" onClick={sendCartToWhatsApp}>
//         Send Cart ({cart.length})
//       </button>

//       <button className="clear-cart-btn" onClick={clearCart}>
//         Clear Cart
//       </button>

//       {/* 💊 GRID */}
//       <div className="medicine-grid">
//         {filteredMedicines.map((med) => (
//           <div key={med.id} className="medicine-card">

//             <img src={med.image} alt={med.name} />

//             <div className="med-content">

//               <p><span className="label">Name:</span> {med.name}</p>

//               <p><span className="label">Brand:</span> {med.brand}</p>

//               <p className="desc">
//                 <span className="label">Description:</span> {med.description}
//               </p>

//               {/* ✅ FIXED PRICE + TYPE */}
//               <div className="med-bottom">
//                 <span className="price">
//                   ₹{med.price}
//                 </span>

//                 <span className="price-type">
//                   ({med.priceType || "per unit"})
//                 </span>
//               </div>

//               {/* STOCK */}
//               <p className={`stock ${med.stock < 10 ? "low" : ""}`}>
//                 {med.stock > 0
//                   ? `Stock: ${med.stock}`
//                   : "Out of Stock ❌"}
//               </p>

//             </div>

//             <button
//               className="cart-btn"
//               onClick={() => addToCart(med)}
//               disabled={med.stock === 0}
//             >
//               Add to Cart
//             </button>

//             <button
//               className="buy-now-btn"
//               onClick={() => buyNowWhatsApp(med)}
//               disabled={med.stock === 0}
//             >
//               Buy Now
//             </button>

//           </div>
//         ))}
//       </div>

//       {/* ❌ NO RESULT */}
//       {filteredMedicines.length === 0 && (
//         <p>No medicines found ❌</p>
//       )}
//     </div>
//   );
// }




import React, { useState, useEffect } from "react";
import "./MedicineStore.css";
import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";

const WHATSAPP_NUMBER = "9779766714481";

export default function MedicineStore() {
  const [cart, setCart] = useState([]);
  const [medicines, setMedicines] = useState([]);
  const [search, setSearch] = useState("");
  const [expandedId, setExpandedId] = useState(null); // 🔥 read more

  useEffect(() => {
    const fetchMedicines = async () => {
      const snapshot = await getDocs(collection(db, "medicines"));
      const data = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setMedicines(data);
    };

    fetchMedicines();
  }, []);

  // 🔍 FILTER
  const filteredMedicines = medicines.filter((med) =>
    med.name?.toLowerCase().includes(search.toLowerCase()) ||
    med.brand?.toLowerCase().includes(search.toLowerCase())
  );

  // 🛒 ADD TO CART
  const addToCart = (med) => {
    const existing = cart.find((item) => item.id === med.id);

    if (existing) {
      setCart(
        cart.map((item) =>
          item.id === med.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { ...med, quantity: 1 }]);
    }
  };

  // 📲 SEND CART
  const sendCartToWhatsApp = () => {
    if (cart.length === 0) return alert("Cart is empty!");

    // let message = "🛒 *Medicine Order List*\n\n";

    // cart.forEach((item) => {
    //   message += `*${item.name}*\n`;
    //   message += `${item.brand}\n`;
    //   message += `Qty: ${item.quantity}\n`;
    //   message += `Price: ₹${item.price} (${item.priceType})\n\n`;
    // });

      let message = "🛒 *Medicine Order List*\n\n";

    cart.forEach((item) => {
      message += `*${item.name}*\n`;
      message += `${item.brand}\n`;
      message += `${item.description}\n`;
      message += `${item.image}\n`;
      message += `Qty: ${item.quantity}\n`;
      message += `Price: ₹${item.price} (${item.priceType})\n\n`;
    });

    const total = cart.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );

   // message += `💰 Total: ₹${total}`;
         message += `💰 *Total: ₹${total}*\n\nPlease confirm order.`;

    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
    );
  };

  const clearCart = () => setCart([]);

  // ⚡ BUY NOW
  const buyNowWhatsApp = (med) => {
    const message = `🛒 *Instant Order*

 *Name:* ${med.name}
*Brand:* ${med.brand}
 *Price:* ₹${med.price} (${med.priceType})
 *Details:* ${med.description}

 *Image:* ${med.image}

 Qty: 1

 Please confirm availability and delivery.`;

    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
    );
  };

  return (
    <div className="store-container"  id="medicinestore">
      <h2 className="title">🛒 Buy Medicines</h2>

      {/* SEARCH */}
      <input
        className="search-input"
        placeholder="🔍 Search medicine..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* CART */}
      <div className="cart-bar">
        <span>🛒 {cart.length} items</span>

        <div>
          <button className="cart-send-btn" onClick={sendCartToWhatsApp}>
            Order
          </button>

          <button className="clear-cart-btn" onClick={clearCart}>
            Clear
          </button>
        </div>
      </div>

      {/* GRID */}
      <div className="medicine-grid">
        {filteredMedicines.map((med) => (
          <div key={med.id} className="medicine-card">

            <img src={med.image} alt={med.name} />

            <div className="med-content">

              <p><b>Name:</b> {med.name}</p>
              <p><b>Brand:</b> {med.brand}</p>

              {/* DESCRIPTION */}
              <p className="desc">
                <b>Description:</b>{" "}
                {expandedId === med.id
                  ? med.description
                  : med.description?.slice(0, 60)}

                {med.description?.length > 60 && (
                  <span
                    className="read-more"
                    onClick={() =>
                      setExpandedId(
                        expandedId === med.id ? null : med.id
                      )
                    }
                  >
                    {expandedId === med.id
                      ? " Show Less"
                      : "... Read More"}
                  </span>
                )}
              </p>

              {/* PRICE */}
              <div className="med-bottom">
                <span className="price">₹{med.price}</span>
                <span className="price-type">
                  ({med.priceType || "per unit"})
                </span>
              </div>

              {/* STOCK */}
              <p className={`stock ${med.stock < 10 ? "low" : ""}`}>
                {med.stock > 0
                  ? `Stock: ${med.stock}`
                  : "Out of Stock ❌"}
              </p>

            </div>

            <button
              className="cart-btn"
              onClick={() => addToCart(med)}
              disabled={med.stock === 0}
            >
              Add to Cart
            </button>

            <button
              className="buy-now-btn"
              onClick={() => buyNowWhatsApp(med)}
              disabled={med.stock === 0}
            >
              Buy Now
            </button>

          </div>
        ))}
      </div>

      {filteredMedicines.length === 0 && (
        <p>No medicines found ❌</p>
      )}
    </div>
  );
}
