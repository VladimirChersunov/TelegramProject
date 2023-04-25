// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBKTPLzKQelmwsotF0Y4XxE1gAI2niChR0",
  authDomain: "cryptic-36pr31.firebaseapp.com",
  projectId: "cryptic-36pr31",
  storageBucket: "cryptic-36pr31.appspot.com",
  messagingSenderId: "964504093447",
  appId: "1:964504093447:web:75006a6771aaa26712bba2",
  measurementId: "G-CZ567ZWYJK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);