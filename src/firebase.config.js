import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAb6mXVBGCwdXoibUnd6Wo-AYPDKAutqZE",
  authDomain: "shoppingmart-d40b3.firebaseapp.com",
  projectId: "shoppingmart-d40b3",
  storageBucket: "shoppingmart-d40b3.appspot.com",
  messagingSenderId: "347670572744",
  appId: "1:347670572744:web:dbe28920f904b16cddfffd",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;
