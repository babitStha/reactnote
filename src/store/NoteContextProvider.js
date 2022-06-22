import NoteContext from './NoteContext'

import React, { useState } from 'react'

const NoteContextProvider = (props) => {
    const [notes, setNotes] = useState([])

    const addNote = note => {
        const updated = {
            id: Date.now(),
            isRead: false,
            ...note
        }
        console.log(updated)
        setNotes(prevnote => {
            return [updated, ...prevnote]
        })
        console.log(notes)
    }
    const removeNote = (id) => {
        const filtered = notes.filter(note => note.id !== id)
        setNotes(filtered)
    }
    const editNote = (id, newNote) => {
        const objIndex = notes.findIndex((obj => obj.id === id))
        notes[objIndex].title = newNote.title
        notes[objIndex].body = newNote.body

    }
    const setRead = (id) => {
        let tempNote = notes
        const objIndex = tempNote.findIndex(note => note.id === id)
        tempNote[objIndex].isRead = true
        setNotes(tempNote)
        console.log(tempNote[objIndex]) 
        
    }
    const data = {
        notes,
        addNote,
        removeNote,
        editNote,
        setRead
    }
    return (
        <NoteContext.Provider value={data}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteContextProvider