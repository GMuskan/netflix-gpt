// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBhvcEZw4seG2-qa0B3ec2pAIy7eFu8Ldo",
    authDomain: "netflixgpt-66216.firebaseapp.com",
    projectId: "netflixgpt-66216",
    storageBucket: "netflixgpt-66216.firebasestorage.app",
    messagingSenderId: "937027887775",
    appId: "1:937027887775:web:2c558c661541df7466f8aa",
    measurementId: "G-PVLDDHGQZY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();