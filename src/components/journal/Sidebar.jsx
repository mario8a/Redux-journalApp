import React from 'react'

export const Sidebar = () => {
   return (
      <aside className="journal__sidebar">
         <div className="journal__sidebar-navbar">
            <h3 className="mt-5">
               <i className="fa fa-moon"/>
               <span> Mario</span>
            </h3>

            <button className="btn">
               Logout
            </button>
         </div>

         <div className="journal__new-entry">
            <i className="fa fa-calendar-plus fa-5x"/>
            <p className="mt-5">
               New entry
            </p>
         </div>
      </aside>
   )
}