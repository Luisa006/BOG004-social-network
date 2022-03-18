// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.8/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.6.8/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCjs6V87twL-YeDAHykegc1RLQWVZ06D3M",
  authDomain: "social-network-firebase-7f2f0.firebaseapp.com",
  projectId: "social-network-firebase-7f2f0",
  storageBucket: "social-network-firebase-7f2f0.appspot.com",
  messagingSenderId: "528237620084",
  appId: "1:528237620084:web:e3aceecbdeb09e8ba55a21",
  measurementId: "G-1HGS3KPYJS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
