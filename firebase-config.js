// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCU6q4i-fxYeFL77yBY055CjBwKlSoQzag",
  authDomain: "zero-budget-0.firebaseapp.com",
  projectId: "zero-budget-0",
  storageBucket: "zero-budget-0.appspot.com",
  messagingSenderId: "1092016009722",
  appId: "1:1092016009722:web:e5bac81fafdb4ade71f443",
  measurementId: "G-Y2H5MF5MG9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);