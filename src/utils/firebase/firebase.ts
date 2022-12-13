// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAoMoSzm5cPiz8XOgs5QR6TrAbpHFDmSnM",
  authDomain: "to-do-list-4a73c.firebaseapp.com",
  projectId: "to-do-list-4a73c",
  storageBucket: "to-do-list-4a73c.appspot.com",
  messagingSenderId: "471266631610",
  appId: "1:471266631610:web:05a155384499b7960b0783",
  measurementId: "G-5DRGF734LX"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);