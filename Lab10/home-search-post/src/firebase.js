// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getDatabase } from "firebase/database";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAEUyKTf2EmzwqjCYkQoYw5wrZ56ksH20w",
  authDomain: "ntut-web-by-108ac1026-001.firebaseapp.com",
  databaseURL:
    "https://ntut-web-by-108ac1026-001-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "ntut-web-by-108ac1026-001",
  storageBucket: "ntut-web-by-108ac1026-001.appspot.com",
  messagingSenderId: "986757797850",
  appId: "1:986757797850:web:5502e14f61fb05c7f012e3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database = getDatabase(app);
