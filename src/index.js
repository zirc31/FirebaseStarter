// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDgsBT-4vqjTbz-t9QnJMwj3fC4FqRvwbs",
  authDomain: "gettingstartedwithfireba-e7672.firebaseapp.com",
  projectId: "gettingstartedwithfireba-e7672",
  storageBucket: "gettingstartedwithfireba-e7672.appspot.com",
  messagingSenderId: "46759292963",
  appId: "1:46759292963:web:3cfc50916e094f67894196",
  measurementId: "G-04PT2K4RB0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
console.log(app)