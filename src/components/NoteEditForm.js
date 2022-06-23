import React,{useContext} from 'react'
import Modal from './Modal'
import { Fragment } from 'react'
import Form from './AddNotes/Form'
import NoteContext from '../store/NoteContext'

const NoteEditForm = props => {
  const noteCntx =useContext(NoteContext)
  const onSubmit =(body, title) =>{
    const id= props.id
    noteCntx.editNote(id,{body,title})
    alert('Note changed Sucessfully')
    props.onClick()
  }
  return (
    <Fragment>
      <Modal onClick={props.onClick}>
        <Form onSubmit={onSubmit}/>
      </Modal>
    </Fragment>
  )
}

export default NoteEditForm