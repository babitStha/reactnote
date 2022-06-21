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
            return [updated, ...notes]
        })
    }
    const removeNote = (id) => {
        const filtered = notes.filter(note => note.id !== id)
        setNotes(filtered)
    }
    const editNote = (id, newNote) => {
        const objIndex = notes.findIndex((obj => obj.id === id));
        notes[objIndex].title = newNote.title
        notes[objIndex].body = newNote.body

    }
    const setRead = (id) => {

        setNotes(prevnotes => {
            const objIndex = prevnotes.findIndex((obj => obj.id === id));
            console.log(prevnotes[objIndex])
        })
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