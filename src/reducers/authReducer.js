import { types } from "../types/types";

/* //El state va estar vacio cuando nadie este autenticado
    {
       uid: '78979789asdasd'
       name: 'Mario'
    } 
 */

//El state debe ser inizialidado con algun valor, si no regresa undefined
export const authReducer = (state = {}, action) => {

   switch (action.type) {
      case types.login:
         return {
            uid: action.payload.uid,
            name: action.payload.displayName
         }
      case types.logout:
         return {}
      
      default:
         return state;
   }

}