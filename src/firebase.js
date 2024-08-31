import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC6eDwKQU_8vH3sADftBAMJtXcr2YleY-o",
  authDomain: "for-devoops.firebaseapp.com",
  projectId: "for-devoops",
  storageBucket: "for-devoops.appspot.com",
  messagingSenderId: "455894534766",
  appId: "1:455894534766:web:fd3eae3083dec6c821b47f",
  measurementId: "G-H0YBC44HVG",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
