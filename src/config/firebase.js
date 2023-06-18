import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: "AIzaSyCRP9zLZTqGvI0kmF-ES5Ksvwgrc0x0_TA",
  authDomain: "ebac-clone-tiktok.firebaseapp.com",
  projectId: "ebac-clone-tiktok",
  storageBucket: "ebac-clone-tiktok.appspot.com",
  messagingSenderId: "680747770847",
  appId: "1:680747770847:web:9106406e20be655cdd1a6a"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;