import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
   apiKey: "AIzaSyBPPv5nsQIma6khszdDyaf5erxqwdO46YE",
   authDomain: "pwangular-28d6b.firebaseapp.com",
   databaseURL: "https://pwangular-28d6b.firebaseio.com",
   projectId: "pwangular-28d6b",
   storageBucket: "pwangular-28d6b.appspot.com",
   messagingSenderId: "218585984194",
   appId: "1:218585984194:web:03e7a6fc904f6277c85f5b"
 };
 // Initialize Firebase
 firebase.initializeApp(firebaseConfig);
 //referencia a la base de datos
 const db = firebase.firestore();
 //Auth provider (= para otras twitter..github..)
 const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

 export {
    db,
    googleAuthProvider,
    firebase
 }