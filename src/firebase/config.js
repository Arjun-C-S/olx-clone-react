import firebase from "firebase";
import "firebase/auth";
import "firebase/firebase";
import "firebase/storage";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDttvAH_K1uSxJDi4rZmevdGbhZ0mvlQSA",
  authDomain: "fir-d22d0.firebaseapp.com",
  projectId: "fir-d22d0",
  storageBucket: "fir-d22d0.appspot.com",
  messagingSenderId: "78716620821",
  appId: "1:78716620821:web:8b2e5523b88be58d957e1c",
  measurementId: "G-CH71NJDNCZ",
};
export default firebase.initializeApp(firebaseConfig);
