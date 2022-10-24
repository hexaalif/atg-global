// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyASMk0twUvWOEmKVnCznwhIxkioxVk3lqw",
  authDomain: "atg-company.firebaseapp.com",
  projectId: "atg-company",
  storageBucket: "atg-company.appspot.com",
  messagingSenderId: "546602535020",
  appId: "1:546602535020:web:c41e60d6c3671d8a8af049",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
