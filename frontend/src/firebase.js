// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFireStore} from "firebase/firestore"





const firebaseConfig = {
  apiKey: "AIzaSyAYU9Uv6K3olisCzt3FnZU1bDnHsW4ecag",
  authDomain: "e-manager-627ea.firebaseapp.com",
  projectId: "e-manager-627ea",
  storageBucket: "e-manager-627ea.appspot.com",
  messagingSenderId: "1021939260309",
  appId: "1:1021939260309:web:d49364262695156d7ef49c",
  measurementId: "G-L0ET0Q25TS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const firestore = getFireStore(app);