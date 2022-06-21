import React from "react";

const NoteContext = React.createContext({
    notes:[],
    addNote: (note)=>{},
    removeNote: (id)=>{},
    editNote: (oldId,newNote)=>{}
})
export default NoteContext