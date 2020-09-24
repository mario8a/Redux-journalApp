import React from 'react'

export const NotesAppBar = () => {
   return (
      <div className="notes__appbar">
         <span>28 Agosto 2020</span>
         <div>
            <button className="btn nav-btn">
               Picture
            </button>
            <button className="btn nav-btn">
               Save
            </button>
         </div>
      </div>
   )
}
