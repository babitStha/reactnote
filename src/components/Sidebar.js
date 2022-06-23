import React, { useContext } from 'react'
import classes from './Sidebar.module.css'
import NoteContext from '../store/NoteContext'


const NoteItem = props => {
    const { notes, setRead, removeNote } = useContext(NoteContext)
    const setId =(id)=>{
        props.onClick()
        props.getId(id)
    }
  return <React.Fragment>
      {
          notes?.length === 0 ? <p className={classes.message}>You dont have any Notes</p> :
          notes.map((note) => {
              return <div className={classes.note} key={note.id}>
                  <div className={note.isRead ? classes['note-title'] : `${classes['note-title']} ${classes['note-unread']}`} onClick={()=>setRead(note.id)}>
                      {note.title}
                  </div>
                  <div className="action" >
                      <button onClick={()=>setId(note.id)}>edit</button>
                      <button onClick={()=>removeNote(note.id)}>Delete</button>
                  </div>
              </div>
          })
      }
  </React.Fragment>
}

const Sidebar = props => {
    return (
        <div className={classes.sidebar}>
            <div className={classes['sidebar-header']}>
                Notes
            </div>
            <div className={classes['sidebar-body']}>
                <NoteItem onClick={props.onClick} getId={props.getId}/>
            </div>
        </div>
    )
}

export default Sidebar