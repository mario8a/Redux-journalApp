import Swal from 'sweetalert2'

import {firebase, googleAuthProvider} from '../firebase/firebase-config';
import { types } from "../types/types";
import { noteLogout } from './notes';
import { finishLoading, startLoading } from './ui';

//creando accion asincrona
//Iniciar sesion con email y password
//En esta funcion deben ser despachadas las acctiones de loading
export const startLoginEmailPassword = (email,password) => {
   //como es una tarea asincrona, se necesita retornar un callback
   return (dispatch) => {
      //Disparar el startLoading aqui
      dispatch(startLoading());
      //disparando el dispacth de las acciones
      //Hacer autenticacion con firebase
      firebase.auth().signInWithEmailAndPassword(email, password)
         .then(({user}) => {
            // console.log(user);
            //Disparar la otra o dispatch acction de loading
            dispatch(
               login(user.uid, user.displayName)
            );

            dispatch(finishLoading());
         })
         .catch(e => {
            console.log(e)
            dispatch(finishLoading());
            Swal.fire('Error', e.message, 'error');
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
            Swal.fire('Error', e.message, 'error');
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

export const startLogout = () => {
   return async(dispatch) => {
      await firebase.auth().signOut();
      //Disparando la accion que va borrar el uid del store
      dispatch(logout());
      //disparar action de logout para limpuar notas al cerrar sesion
      dispatch( noteLogout() )
   }
}

export const logout = () => ({
   type: types.logout
})