import { db } from "../firebase/firebase-config";
import Swal from "sweetalert2";
import { types } from "../types/types";
import { loadNotes } from "../helpers/loadNotes";
import { fileUpload } from "../helpers/fileUpload";
//react-journal-app
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

      try {
         //la referencia a db regresa una promesa, asi que decidi hacerlo con async y await
         const doc = await db.collection(`${uid}/journal/notes`).add(newNote);
         // console.log(doc)
         dispatch(activeNote(doc.id, newNote));
         //disparando accion para ver las notas cuando se ccrean
         dispatch(addNewNote(doc.id, newNote))
      } catch (error) {
         console.log(error)
      }
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
//accion para ver las notas en la barra lateral al guardarlas
export const addNewNote = (id, note) => ({
   type: types.notesAddNew,
   payload: {
      id,
      ...note
   }
})


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
//guardar la nota en la DB
export const startSaveNote = (note) => {
   return async (dispatch, getState) => {

      const {uid} = getState().auth;
      //evaluando si no hay url (imagen)
      if(!note.url) {
         delete note.url;
         //Si no hay borrala
      }

      const noteToFirestore = {...note};
      delete noteToFirestore.id;

      await db.doc(`${uid}/journal/notes/${note.id}`).update(noteToFirestore);
      
      dispatch(refreshNote(note.id, noteToFirestore));
      Swal.fire('Saved', note.title, 'success')
   }
}

//actualiza el store cuando se guarda la nota en la DB
export const refreshNote = (id, note) => ({
   type: types.notesUpdated,
   payload: {
      id,
      note: {
         id,
         ...note
      }
   }
})

//Subir imagen
export const startUploading = (file) => {
   return async (dispatch, getState) => {

      const {active:activeNote} = getState().notes;
      // console.log(file);
      // console.log(activeNote);
      Swal.fire({
         title: 'Uploading...',
         text: 'Please wait..',
         allowOutsideClick: false,
         willOpen: () => {
            Swal.showLoading();
         }
      });

      // Carga del archivo con ayuda de un helper
      const fileUrl = await fileUpload(file);
      activeNote.url = fileUrl;
      // console.log(fileUrl);
      //Dispatch para cargar la imagen a firebase
      dispatch(startSaveNote(activeNote))

      //Quitando el loading de carga
      Swal.close();
   }
}

//action para borrar nota de firebase, recibe el id de la nota
//Tambien se debe actualizar o borrar la nota del state
export const startDeleting = (id) => {
   return async (dispatch, getState) => {

      const uid = getState().auth.uid;
      await db.doc(`${uid}/journal/notes/${id}`).delete();

      //borrar nota del store
      dispatch(deleteNote(id));
   }
}

//action para borrar nota del state
export const deleteNote = (id) => ({
   type: types.notesDelete,
   payload: id
});

//action para limpiar las notas al cerrar sesion
export const noteLogout = () => ({
   type: types.notesLogoutCleaning
});