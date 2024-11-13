import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAM0eGU2v5GAQGZzG93D5IlTD__7MfagoM",
  authDomain: "bishkek-master.firebaseapp.com",
  projectId: "bishkek-master",
  storageBucket: "bishkek-master.firebasestorage.app",
  messagingSenderId: "510831938757",
  appId: "1:510831938757:web:65354084f322b6e25574ac",
  measurementId: "G-8CZDWVFTX1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
// const analytics = getAnalytics(app);
export const db = getFirestore(app);
