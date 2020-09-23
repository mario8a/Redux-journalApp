import React from 'react'

export const JournalEntry = () => {
   return (
      <div className="journal__entry pointer">
         <div 
            className="journal__entry-picture"
            style={{
               backgroundSize: 'cover',
               backgroundImage: 'url(https://www.w3schools.com/w3css/img_lights.jpg)'
            }}
         ></div>

         <div className="journal__entry-body">
            <p className="journal__entry-title">
               Un nuevo dia
            </p>
            <p className="journal__entry-content">
               Sint ullamco sunt tempor aliqua proident Lorem commodo.
            </p>
         </div>

         <div className="journal__entry-date-box">
            <span>Monay</span>
            <h4>28</h4>
         </div>
      </div>
   )
}
