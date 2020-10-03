import React from 'react';
import moment from 'moment';
import { useDispatch } from 'react-redux';
import { activeNote } from '../../actions/notes';

export const JournalEntry = ({id, date, title, body, url}) => {

   const dispatch = useDispatch();

   const noteDay = moment(date);
   //Activar nota al darle click
   const handeEntryClick = () => {
      dispatch(activeNote(id,{title, body, date, url}));
   }

   return (
      <div 
         className="journal__entry pointer" 
         onClick={handeEntryClick}>
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
      </div>
   )
}
