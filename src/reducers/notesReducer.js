import { types } from "../types/types";

/*
   {
      notes: [],
      active: null //No hay inguna nota seleccionada
      active: { //nota activa
         id: 'asdasdasd',
         title: '',
         body: '',
         imageUrl: '',
         date: 233232
      }
   }
*/
const initialState = {
   notes: [],
   active: null
}

export const notesReducer = (state = initialState, action) => {

   switch (action.type) {

      case types.notesActive:
         return {
            ...state,
            active: {
               ...action.payload
            }
         }
      case types.notesLoad:
         // console.log(action.payload)
         return {
            ...state,
            notes: [...action.payload]
         }
 
      default:
         return state;
   }

}