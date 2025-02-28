// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC7rm-6VCibU3YQbM5ulBNNlPm5mKQTSow",
  authDomain: "swiggy-gpt.firebaseapp.com",
  projectId: "swiggy-gpt",
  storageBucket: "swiggy-gpt.firebasestorage.app",
  messagingSenderId: "775984891242",
  appId: "1:775984891242:web:7e4f2e520314333ab75113",
  measurementId: "G-39M6BKMS54"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);