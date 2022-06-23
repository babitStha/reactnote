import NoteContext from './NoteContext'

import React, { useState, useEffect } from 'react'

const NoteContextProvider = (props) => {
    const [notes, setNotes] = useState(()=>{
        const data = localStorage.getItem('notes')
        return data ? JSON.parse(data) : []
    })

    useEffect(()=>{
        localStorage.setItem('notes', JSON.stringify(notes));
    },[notes])
        
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
        const data = [...notes]
        const objIndex = data.findIndex((obj => obj.id === id));
        data[objIndex].title = newNote.title
        data[objIndex].body = newNote.body
        setNotes(data)

    }
    const setRead = (id) => {
        const updatedNote = notes.map(note => {
            if (note.id === id) {
                note.isRead = true
            }
            return note
        })
        setNotes(updatedNote)
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