// import React from "react";
// import { Navigate } from "react-router-dom";
// import { auth } from "../firebase";

// const ProtectedRoute = ({ children }) => {
//   const user = auth.currentUser;

//   // ❌ Not logged in → redirect to login
//   if (!user) {
//     return <Navigate to="/adminlogin" />;
//   }

//   // ✅ Logged in → allow access
//   return children;
// };

// export default ProtectedRoute;



import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { auth } from "../firebase";
import { onAuthStateChanged } from "firebase/auth";

const ProtectedRoute = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  if (loading) return <p>Loading...</p>;

  if (!user) return <Navigate to="/adminlogin" />;

  return children;
};

export default ProtectedRoute;