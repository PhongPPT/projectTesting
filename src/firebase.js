import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyAIkofo6DLfNf5jjvjO6hzkJrXw0tboTyE",
  authDomain: "testapi-fd352.firebaseapp.com",
  projectId: "testapi-fd352",
  // storageBucket: "testapi-fd352.firebasestorage.app",
  storageBucket: "testapi-fd352.appspot.com",
  messagingSenderId: "223425154735",
  appId: "1:223425154735:web:f916d99c5630b692a2ce5a",
  measurementId: "G-W7YBKLYGQ3"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);