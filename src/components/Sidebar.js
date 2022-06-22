import React, { useContext } from 'react'
import classes from './Sidebar.module.css'
import NoteContext from '../store/NoteContext'


const NoteItem = () => {
    const { notes, setRead } = useContext(NoteContext)
  return <React.Fragment>
      {
          notes?.length === 0 ? <p>You dont have any Notes</p> :
          notes.map((note) => {
              return <div className={classes.note} key={note.id}>
                  <div className={note.isRead ? classes['note-title'] : `${classes['note-title']} ${classes['note-unread']}`} onClick={setRead.bind(note.id)}>
                      {note.title}
                  </div>
              </div>
          })
      }
  </React.Fragment>
}

const Sidebar = () => {
  

    
    return (
        <div className={classes.sidebar}>
            <div className={classes['sidebar-header']}>
                Notes
            </div>
            <div className={classes['sidebar-body']}>
                <NoteItem />
            </div>
        </div>
    )
}

export default Sidebar