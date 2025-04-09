// src/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCNs--uRvqWfSNGxuZxIDCTftpaIsJYLC0",
  authDomain: "flavour-sync.firebaseapp.com",
  projectId: "flavour-sync",
  storageBucket: "flavour-sync.appspot.com",
  messagingSenderId: "979976451194",
  appId: "1:979976451194:web:3981cd3b85cdbf29f7b7c3"
};
 
// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };


// 0UM0nXgfGSgLDnB7