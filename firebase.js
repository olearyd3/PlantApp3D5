// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDbGrWO2KNhhpt-236R3gEyznsObMkGImY",
  authDomain: "plant-app-3d5.firebaseapp.com",
  databaseURL: "https://plant-app-3d5-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "plant-app-3d5",
  storageBucket: "plant-app-3d5.appspot.com",
  messagingSenderId: "288665693220",
  appId: "1:288665693220:web:331d9339655daf9f27bcb1",
  measurementId: "G-B0336EH8YC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
