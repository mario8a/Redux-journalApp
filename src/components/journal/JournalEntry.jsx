import React from 'react';
import moment from 'moment';
import { useDispatch } from 'react-redux';
import { activeNote, startDeleting } from '../../actions/notes';

export const JournalEntry = ({id, date, title, body, url}) => {

   const dispatch = useDispatch();

   const noteDay = moment(date);
   //Activar nota al darle click
   const handleEntryClick = () => {
      dispatch(activeNote(id,{title, body, date, url}));
   }

   //funcion para borrar nota
   const handleDelete = () => {
      dispatch(startDeleting(id));
   }

   return (
      <div 
         className="journal__entry pointer animate__animated animate__fadeIn animate__faster" 
         onClick={handleEntryClick}>
         {
            url && 
            <div 
               className="journal__entry-picture"
               style={{
                  backgroundSize: 'cover',
                  backgroundImage: `url(${url})`
               }} 
            ></div>
         }
         {/* Aqui se deberia de poner el handeEntryClick */}
         <div className="journal__entry-body">
            <p className="journal__entry-title">
               {title}
            </p>
            <p className="journal__entry-content">
               {body}
            </p>
         </div>

         <div className="journal__entry-date-box">
            <span>{noteDay.format('dddd')}</span>
            <h4>{noteDay.format('Do')}</h4>
         </div>
         <button 
            className="btn btn-danger"
            onClick={handleDelete}
         >
            <i className="fas fa-trash-alt fa-2x"></i>
         </button>
      </div>
   )
}
