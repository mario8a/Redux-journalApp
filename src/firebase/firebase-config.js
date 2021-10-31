import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
   apiKey: process.env.REACT_APP_APIKEY,
   authDomain: process.env.REACT_APP_AUTHDOMAIN,
   databaseURL: process.env.REACT_APP_DATABASEURL,
   projectId: process.env.REACT_APP_PROJECTID,
   storageBucket: process.env.REACT_APP_STORAGEBUCKET,
   messagingSenderId: process.env.REACT_APP_MESSAGINGSENDERID,
   appId: process.env.REACT_APP_APPID,
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