import React, { useContext } from 'react'
import classes from './Body.module.css'
import NoteContext from '../store/NoteContext'
import AddNote from './AddNotes/AddNote'

const Body = props => {
    const noteCntx = useContext(NoteContext)
    const content = noteCntx.notes.length === 0 ? (<p>No Notes Available</p>) :
        noteCntx.notes.map((note) => {
            return <div className={classes.note} key={note.id}>
                <div className={classes['note-title']} >
                    <h1>{note.title}</h1>
                </div>
                <div className={classes['note-body']}>
                    {note.body}
                </div>
            </div>
        })
    return (
        <div className={classes.main}>
            <AddNote />
            <div className={classes.body}>
                {content}
            </div>
        </div>
    )
}

export default Body