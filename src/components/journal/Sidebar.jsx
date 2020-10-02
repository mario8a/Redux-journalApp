import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
//component
import { JournalEntries } from './JournalEntries'
//actions
import { startLogout } from '../../actions/auth'
import {startNewNote} from '../../actions/notes';

export const Sidebar = () => {

   
   const {name} = useSelector(state => state.auth)
   const dispatch = useDispatch()

   const handleLogout = () => {
      dispatch(startLogout())
   }

   const handleAddNew = () => {
      dispatch(startNewNote())
   }

   return (
      <aside className="journal__sidebar">
         <div className="journal__sidebar-navbar">
            <h3 className="mt-5">
               <i className="fa fa-moon"/>
               <span> {name} </span>
            </h3>

            <button 
               className="btn"
               onClick={handleLogout}
               >
               Logout
            </button>
         </div>

         <div 
            className="journal__new-entry"
            onClick={handleAddNew}
         >
            <i className="fa fa-calendar-plus fa-5x"/>
            <p className="mt-5">
               New entry
            </p>
         </div>

         <JournalEntries/>

      </aside>
   )
}
