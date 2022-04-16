// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBm9ioZDclr2q7721c07SpeHn-JsCiO6hg",
  authDomain: "fir-7b144.firebaseapp.com",
  projectId: "fir-7b144",
  storageBucket: "fir-7b144.appspot.com",
  messagingSenderId: "724164694066",
  appId: "1:724164694066:web:00723e8f6414f106106c2b",
  measurementId: "G-48451NFJ47"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);