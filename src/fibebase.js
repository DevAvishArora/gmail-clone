import firebase from "firebase/compat/app";
import 'firebase/compat/firestore';
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD-rWFYW3oaLD59inh14MSuqc0eWQIoh_k",
  authDomain: "clone-c8ba0.firebaseapp.com",
  projectId: "clone-c8ba0",
  storageBucket: "clone-c8ba0.appspot.com",
  messagingSenderId: "613239540747",
  appId: "1:613239540747:web:faddbc778cb84c7a2c0b0e",
  measurementId: "G-7WPKLDFP9M",
};


const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
