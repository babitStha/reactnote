import React, { useContext } from 'react'
import classes from './Sidebar.module.css'
import NoteContext from '../store/NoteContext'

const Sidebar = () => {
    const noteCntx = useContext(NoteContext)

    const sidebarBody = noteCntx.notes.length === 0 ? <p>You dont have any Notes</p> : noteCntx.notes.map((note) => {
        return <div className={classes.note} key={note.id}>
            <div className={note.isRead ? classes['note-title'] : `${classes['note-title']} ${classes['note-unread']}`} onClick={noteCntx.setRead.bind(note.id)}>
                {note.title}
            </div>
        </div>
    })
    return (
        <div className={classes.sidebar}>
            <div className={classes['sidebar-header']}>
                Notes
            </div>
            <div className={classes['sidebar-body']}>
                {sidebarBody}
            </div>
        </div>
    )
}

export default Sidebar