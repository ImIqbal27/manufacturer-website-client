// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDZY3hFWuyye2-hZkdtmQC5sVcuFd-9150",
    authDomain: "manufacturer-website-cli-b14a0.firebaseapp.com",
    projectId: "manufacturer-website-cli-b14a0",
    storageBucket: "manufacturer-website-cli-b14a0.appspot.com",
    messagingSenderId: "417963053079",
    appId: "1:417963053079:web:5bbde51167c0e32d760c52"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;