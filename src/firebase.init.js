// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCP1u6NvoGXfcmhkHns7w0t7EHYx9SbKs4",
  authDomain: "tools-c916d.firebaseapp.com",
  projectId: "tools-c916d",
  storageBucket: "tools-c916d.appspot.com",
  messagingSenderId: "411760064484",
  appId: "1:411760064484:web:7d95c94e9d7c5f32b839f1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default auth;