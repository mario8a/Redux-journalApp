import { db } from "../firebase/firebase-config";
import { types } from "../types/types";
import { loadNotes } from "../helpers/loadNotes";

//getState servira para obtener el state donde se encuentra el uid del usuario
export const startNewNote = () => {
   return async (dispatch, getState) => {
      const {uid} = getState().auth;
      // console.log(uid)
      //Creando la nota que sera grabada en firestore
      const newNote = {
         title: '',
         body: '',
         date: new Date().getTime()
      }
      //la referencia a db regresa una promesa, asi que decidi hacerlo con async y await
      const doc = await db.collection(`${uid}/journal/notes`).add(newNote);
      // console.log(doc)
      dispatch(activeNote(doc.id, newNote));
   }
}

//cambiar el estado a activo de la nota
export const activeNote = (id, note) => ({
   type: types.notesActive,
   payload: {
      id,
      ...note
   }
});

export const startLoadingNotes = (uid) => {
   return async (dispatch) => {
      const notes = await loadNotes(uid);
      dispatch(setNotes(notes)) 
   }
}

//almacenar las notas en el state
export const setNotes = (notes) => ({
   type: types.notesLoad,
   payload: notes
});