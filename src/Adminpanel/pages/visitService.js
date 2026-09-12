// import {
//   collection,
//   addDoc,
//   getDocs,
//   query,
//   where,
// } from "firebase/firestore";
// import { db } from "../../firebase";

// export const addVisit = async (patientName, doctorName) => {
//   const today = new Date();

//   const q = query(
//     collection(db, "visits"),
//     where("patientName", "==", patientName),
//     where("doctorName", "==", doctorName)
//   );

//   const snapshot = await getDocs(q);

//   let isFollowUp = false;
//   let opdCharge = 500;

//   if (!snapshot.empty) {
//     const visits = snapshot.docs.map((doc) => doc.data());

//     const lastVisit = visits.sort(
//       (a, b) => new Date(b.visitDate) - new Date(a.visitDate)
//     )[0];

//     const lastDate = new Date(lastVisit.visitDate);

//     const diffDays =
//       (today - lastDate) / (1000 * 60 * 60 * 24);

//     if (diffDays <= 7) {
//       isFollowUp = true;
//       opdCharge = 0;
//     }
//   }

//   await addDoc(collection(db, "visits"), {
//     patientName,
//     doctorName,
//     visitDate: today.toISOString(),
//     opdCharge,
//     isFollowUp,
//   });

//   alert(
//     isFollowUp
//       ? "Follow-up visit (No Charge)"
//       : "New visit (₹200 OPD)"
//   );
// };


import {
  collection,
  addDoc,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import { db } from "../../firebase";

export const addVisit = async (data) => {
  const {
    patientName,
    age,
    gender,
    contact,
    address,
    emergencyContact,
    doctorName,
  } = data;

  const today = new Date();

  // 🔥 Generate Patient ID
  const snapshotAll = await getDocs(collection(db, "visits"));
  const patientId = `PAT${String(snapshotAll.size + 1).padStart(3, "0")}`;

  // 🔍 Check previous visits
  const q = query(
    collection(db, "visits"),
    where("patientName", "==", patientName),
    where("doctorName", "==", doctorName)
  );

  const snapshot = await getDocs(q);

  let isFollowUp = false;
  let opdCharge = 500;

  if (!snapshot.empty) {
    const visits = snapshot.docs.map((doc) => doc.data());

    const lastVisit = visits.sort(
      (a, b) => new Date(b.visitDate) - new Date(a.visitDate)
    )[0];

    const diffDays =
      (today - new Date(lastVisit.visitDate)) / (1000 * 60 * 60 * 24);

    if (diffDays <= 7) {
      isFollowUp = true;
      opdCharge = 0;
    }
  }

  // 💾 Save
  await addDoc(collection(db, "visits"), {
    patientId,
    patientName,
    age,
    gender,
    contact,
    address,
    emergencyContact,
    doctorName,
    visitDate: today.toISOString(),
    opdCharge,
    isFollowUp,
  });

  alert(
    isFollowUp
      ? "Follow-up (No Charge)"
      : "New Visit (₹500 OPD)"
  );
};