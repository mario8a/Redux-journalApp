import React from 'react'
import { useSelector } from 'react-redux'
import { NoteScreen } from '../notes/NoteScreen'
import { NothingSelected } from './NothingSelected'
import { Sidebar } from './Sidebar'

export const JournalScreen = () => {

   //Extrayendo del store si notes esta activa o nel
   const {active} = useSelector(state => state.notes)

   return (
      <div 
         className="jounal__main-content animate__animated animate__fadeIn animate__faster"
      >
         
         <Sidebar />

         <main>
            {
               (active)
                  ? (<NoteScreen/>)
                  : (<NothingSelected/>)
            }
         
         </main>

      </div>
   )
}
