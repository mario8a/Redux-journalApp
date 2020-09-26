import {firebase, googleAuthProvider} from '../firebase/firebase-config';
import { types } from "../types/types";

//creando accion asincrona
export const startLoginEmailPassword = (email,password) => {
   return (dispatch) => {
      //disparando el dispacth de las acciones
      setTimeout(() => {
         dispatch(login(123,'pepe'))
      }, 3500);
   }
}

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

//forma con return
// export const login = (uid, displayName) => {
//    return {
//       type: types.login,
//       payload: {
//          uid,
//          displayName
//       }
//    }
// }