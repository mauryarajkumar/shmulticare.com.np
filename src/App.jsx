

// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


// import Navbar from "./components/Navbar.jsx";
// import Footer from "./components/Footer.jsx";
// import NavupperLogo from "./components/NavupperLogo.jsx";
// import Whatsapp from "./components/Whatsapp.jsx";

// import Hero from "./components/Hero.jsx";
// import About from "./components/About.jsx";
// import Services from "./components/Services.jsx";
// import Highlights from "./components/Highlights.jsx";
// import Contact from "./components/Contact.jsx";
// import Googlemap from "./components/Googlemap.jsx";
// import DoctorList from "./components/DoctorList.jsx";
// import VideoSection from "./components/VideoSection.jsx";
// import MedicineStore from "./Medicinestore/MedicineStore.jsx";
// import AdminLogin from "./Adminpanel/AdminLogin.jsx";
// import AdminDashboard from "./Adminpanel/pages/AdminDashboard.jsx";

// export default function App() {
//   return (
//     <Router>
     
//       <div className="app">
//         <NavupperLogo />
//         <Navbar />

//         <Routes>
//           {/* Home Page */}
//           <Route
//             path="/"
//             element={
//               <main>
//                 <Hero />
//                 <VideoSection />
                
//                  <DoctorList />
//                   <Services />
//                     <About />
//                     <Highlights />
//                       <Contact />
//                          <Googlemap />
//                          <MedicineStore/>
//               </main>
//             }
//           />

//           {/* Doctors Page */}
//           <Route
//             path="/doctors"
//             element={
//               <main>
//                 <DoctorList />
//               </main>
//             }
//           />

//           {/* Services Page */}
//           <Route
//             path="/services"
//             element={
//               <main>
//                 <Services />
//               </main>
//             }
//           />

//           {/* About Page */}
//           <Route
//             path="/about"
//             element={
//               <main>
//                 <About />
//                 <Highlights />
//               </main>
//             }
//           />

//           {/* Contact Page */}
//           <Route
//             path="/contact"
//             element={
//               <main>
               
//                 <Contact />
//               </main>
//             }
//           />

//            <Route
//             path="/googlemap"
//             element={
//               <main>
//                 <Googlemap />
               
//               </main>
//             }
//           />

//           {/* admin pannel */}
//            <Route
//             path="/adminlogin"
//             element={
//               <main>
//                 <AdminLogin />
               
//               </main>
//             }
//           />

//           {/* admindhasboard */}

//               <Route
//             path="/admin-dashboard"
//             element={
//               <main>
//                 <AdminDashboard />
               
//               </main>
//             }
//           />
//         </Routes>

//         <Whatsapp />
//         <Footer />
//       </div>
//     </Router>
//   );
// }




import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import ProtectedRoute from "./Adminpanel/ProtectedRoute";


// Public Components
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import NavupperLogo from "./components/NavupperLogo.jsx";
import Whatsapp from "./components/Whatsapp.jsx";

import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Services from "./components/Services.jsx";
import Highlights from "./components/Highlights.jsx";
import Contact from "./components/Contact.jsx";
import Googlemap from "./components/Googlemap.jsx";
import DoctorList from "./components/DoctorList.jsx";
import VideoSection from "./components/VideoSection.jsx";
import MedicineStore from "./Medicinestore/MedicineStore.jsx";

import DoctorDetails from "./components/DoctorDetails";

// Admin Components
import AdminLogin from "./Adminpanel/AdminLogin.jsx";
import AdminDashboard from "./Adminpanel/pages/AdminDashboard.jsx";
import AddMedicine from "./Adminpanel/pages/AddMedicine.jsx";
import AddVisit from "./Adminpanel/pages/AddVisit.jsx";
import PatientRecords from "./Adminpanel/pages/PatientRecords.jsx";
import ManageMedicines from "./Adminpanel/pages/ManageMedicines.jsx";
import EditMedicine from "./Adminpanel/pages/EditMedicine.jsx";



// 🔥 Layout Component
function Layout() {
  const location = useLocation();

  // Detect admin routes
  const isAdminRoute = location.pathname.startsWith("/ad");

  return (
    <div className="app">

      {/* Show Navbar ONLY for public pages */}
      {!isAdminRoute && (
        <>
          <NavupperLogo />
          <Navbar />
        </>
      )}

      <Routes>
        {/* ===== PUBLIC ROUTES ===== */}

        <Route
          path="/"
          element={
            <main>
              <Hero />
              <VideoSection />
              <DoctorList />
              
              <Services />
              <About />
              <Highlights />
              <Contact />
              <Googlemap />
               <MedicineStore />
             
            </main>
          }
        />

        <Route path="/doctors" element={<><DoctorList /><Services /> <About />  <Highlights /> <Contact /> </>} />
        <Route path="/services" element={<><Services /> <DoctorList /> <About /> <Highlights /> <Contact /> </>} />
        <Route path="/about" element={<><About /> <DoctorList /><Services /><Highlights /> <Contact /></>} />
        <Route path="/contact" element={<><Contact /> <About /> <DoctorList /><Services /><Highlights /> </>} />
        <Route path="/googlemap" element={<Googlemap />} />

         {/* Individual Doctor */}
        <Route
          path="/doctors/:slug"
          element={
            <DoctorDetails />
          }
        />

        {/* ===== ADMIN ROUTES ===== */}

        <Route path="/adminlogin" element={ <AdminLogin />  } />
        <Route path="/admin-dashboard" element={<ProtectedRoute><AdminDashboard /></ProtectedRoute>} />
        <Route path="/admin-add-medicine" element={ <ProtectedRoute> <AddMedicine /> </ProtectedRoute>} />
         <Route path="/add-visit" element={ <ProtectedRoute><AddVisit /></ProtectedRoute>  } />
         <Route path="/add-patient-records" element={  <ProtectedRoute> <PatientRecords /></ProtectedRoute>   } />

         <Route path="/add-manage-medicines" element={ <ProtectedRoute><ManageMedicines /></ProtectedRoute> } />
<Route path="/add-edit-medicine/:id" element={ <ProtectedRoute>  <EditMedicine /> </ProtectedRoute>  } />
        

      </Routes>

      {/* Show Footer ONLY for public pages */}
      {!isAdminRoute && (
        <>
          <Whatsapp />
          <Footer />
        </>
      )}

    </div>
  );
}


// 🔥 Main App
export default function App() {
  return (
    <Router>
      <Layout />
    </Router>
  );
}