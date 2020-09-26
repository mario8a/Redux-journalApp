import {firebase, googleAuthProvider} from '../firebase/firebase-config';
import { types } from "../types/types";

//creando accion asincrona
//Iniciar sesion con email y password
export const startLoginEmailPassword = (email,password) => {
   //como es una tarea asincrona, se necesita retornar un callback
   return (dispatch) => {
      //disparando el dispacth de las acciones
      //Hacer autenticacion con firebase
      firebase.auth().signInWithEmailAndPassword(email, password)
         .then(({user}) => {
            // console.log(user);
            dispatch(
               login(user.uid, user.displayName)
            );
         })
         .catch(e => {
            console.log(e)
         });

   }
}
//registrarse con firebase usando email,password y name
export const startRegisterWithEmailPasswordName = (email,password,name) => {
   return (dispatch) => {
      firebase.auth().createUserWithEmailAndPassword(email, password)
         .then(async({user}) => {
            // console.log(userCred)
            //Esta funcion permite actualizar el displayName
            await user.updateProfile({displayName: name})
            // console.log(user);
            dispatch(
               login(user.uid, user.displayName)
            );
         })
         .catch(e => {
            console.log(e)
         });
   }
}
//Iniciar sesion con google
export const startGoogleLogin = () => {
   return (dispatch) => {
      firebase.auth().signInWithPopup(googleAuthProvider)
         .then(({user}) => {
            // console.log(userCred)
            dispatch(
               login(user.uid, user.displayName)
            )
         });
   }
}

//Forma corta
export const login = (uid, displayName) => ({
   type: types.login,
   payload: {
      uid,
      displayName
   }
})