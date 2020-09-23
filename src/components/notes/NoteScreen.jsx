import React from 'react'
import { NotesAppBar } from './NotesAppBar'

export const NoteScreen = () => {
   return (
      <div className="notes__main-content">
         <NotesAppBar/>

         <div className="notes__content">
            <div className="notes__image">
               <img 
                  src="https://static.vecteezy.com/system/resources/previews/000/246/312/non_2x/mountain-lake-sunset-landscape-first-person-view-vector.jpg" 
                  alt="imagen"
               />
            </div>

            <input 
               type="text"
               placeholder="Some awesome title"
               className="notes__title-input"
            />

            <textarea 
               placeholder="What happend today"
               className="notes__textarea"
            ></textarea>

            
         </div>
      </div>
   )
}
