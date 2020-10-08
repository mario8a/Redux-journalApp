import React from 'react'
import { useRef } from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
//componets
import { NotesAppBar } from './NotesAppBar';
//hooks
import { useForm } from '../../hooks/useForm'
//actions
import { activeNote } from '../../actions/notes'

export const NoteScreen = () => {

   const dispatch = useDispatch();

   const {active:note} = useSelector(state => state.notes)
   //Extrayendo cada uno de los campos del objeto note
   // tambien servira para leer cada uno de los campos del form
   const [formValues, handleInputChange, reset] = useForm(note);
   // console.log(formValues);
   const {body, title} = formValues;
   //Guardando en una referencia el id de la nota
   const activeId = useRef(note.id)
   //implementando useffect para que cambie el estado cada vez que se seleccione una noa
   useEffect(() => {
      //Solo cambiara si cambia el id seleccionado
      if(note.id !== activeId.current) {
         reset(note);
         //activeId ahora tendra el nuevo valor de la nueva nota seleccionada
         activeId.current = note.id
      }

   }, [note, reset]);

   //Este efecto tendra la funcion de "escuchar" cada vez que el formulario cambie
   useEffect(() => {
      dispatch(activeNote(formValues.id, {...formValues}));
   }, [formValues, dispatch]);

   //funcion para borrar nota
   // const handleDelete = () => {
   //    dispatch(startDeleting(id));
   // }

   //Se muestra la info de las notas
   return (
      <div className="notes__main-content">
         <NotesAppBar/>

         <div className="notes__content">
            {
               (note.url) &&
               (<div className="notes__image">
                  <img 
                     src={note.url} 
                     alt="imagen"
                  />
               </div>)
            }

            <input 
               type="text"
               placeholder="Some awesome title"
               className="notes__title-input"
               name="title"
               value={title}
               onChange={handleInputChange}
            />

            <textarea 
               placeholder="What happend today"
               className="notes__textarea"
               name="body"
               value={body}
               onChange={handleInputChange}
            ></textarea>

         </div>

         {/* boton para borrar nota */}

         {/* <button 
            className="btn btn-danger"
            onClick={handleDelete}
         >
            <i class="fas fa-trash-alt fa-5x"></i>
         </button> */}
      </div>
   )
}
