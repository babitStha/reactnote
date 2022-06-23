import React from 'react'
import classes from './Modal.module.css'

const BackDrop = props => {
  return (
    <div className={classes.backdrop} onClick={props.onClick}>
      {props.children}
    </div>
  )
}

const Modal = props => {
  return (
    <React.Fragment>
      <BackDrop onClick={props.onClick} />
      <div className={classes.modal}>
        {props.children}
      </div>
    </React.Fragment>
  )
}

export default Modal