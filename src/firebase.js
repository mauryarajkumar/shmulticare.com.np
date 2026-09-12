import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyD9A8zW3_hdiB_G7OaAWdjt9YyZrwREeBE",
  authDomain: "shmulticare.firebaseapp.com",
  projectId: "shmulticare",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);