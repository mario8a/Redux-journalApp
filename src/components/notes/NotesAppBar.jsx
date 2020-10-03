import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { startSaveNote } from '../../actions/notes'

export const NotesAppBar = () => {

   const dispatch = useDispatch();
   const {active} = useSelector(state => state.notes)

   const handleSave = () => {
      // console.log(active);
      dispatch(startSaveNote(active))
   }

   return (
      <div className="notes__appbar">
         <span>28 Agosto 2020</span>
         <div>
            <button className="btn nav-btn">
               Picture
            </button>
            <button 
               className="btn nav-btn"
               onClick={handleSave}
            >
               Save
            </button>
         </div>
      </div>
   )
}
