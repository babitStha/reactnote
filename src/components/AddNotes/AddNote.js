import React, {useContext} from 'react'
import Form from './Form'
import NoteContext from '../../store/NoteContext'
const AddNote = () => {
  const noteCntx = useContext(NoteContext)
  const addToContext =(body, title) =>{
    noteCntx.addNote({
        title,
        body,
        isRead:false
    })
    
}
  return (
    <React.Fragment>
        <Form onSubmit={addToContext}/>
    </React.Fragment>
  )
}

export default AddNote