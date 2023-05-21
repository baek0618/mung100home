import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA5kQkLS0u_XQBHqXiXOeNBH2rTb-t2xZ0",
  authDomain: "ugiugi-453cd.firebaseapp.com",
  projectId: "ugiugi-453cd",
  storageBucket: "ugiugi-453cd.appspot.com",
  messagingSenderId: "256873103802",
  appId: "1:256873103802:web:835a05a9acf7446f055d83",
  measurementId: "G-MJJYRS9HVM",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
