// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyADbb4oEel2qh1SiPhYCjD8vAFuavsaP_k",
  authDomain: "my-dating-app-5f27e.firebaseapp.com",
  projectId: "my-dating-app-5f27e",
  storageBucket: "my-dating-app-5f27e.appspot.com",
  messagingSenderId: "73693676826",
  appId: "1:73693676826:web:dc67ef5cdacfab532a98a3",
  measurementId: "G-DVMS76XQLQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);