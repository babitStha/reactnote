import React from 'react'
import useInput from '../../hooks/use-input'
import classes from './Form.module.css'


const AddNoteForm = props => {

    const {
        value: title,
        isValid: titleIsValid,
        error: titleHasError,
        reset: titleReset,
        inputChangeHandler: titleChangeHandler,
        inputBlurHandler: titleBlurHandler

    } = useInput(value => value.trim().length >= 5)

    const {
        value: body,
        isValid: bodyIsValid,
        error: bodyHasError,
        reset: bodyReset,
        inputChangeHandler: bodyChangeHandler,
        inputBlurHandler: bodyBlurHandler

    } = useInput(value => value.trim().length >= 10)

    const formIsValid = titleIsValid && bodyIsValid

    const formSubmitHandler = event => {
        event.preventDefault()
        props.onSubmit(body, title)
        titleReset()
        bodyReset()
    }

    return (
        <form onSubmit={formSubmitHandler}>
            <div className="input-control">
                <label htmlFor="title">Title</label>
                <input type="text" className={titleHasError ? classes.invalid : ''} value={title} id='title' onBlur={titleBlurHandler} onChange={titleChangeHandler} />
                {titleHasError && <p>Title must be greater than 5 characters </p>}
            </div>
            <div className="input-control">
                <label htmlFor="body">Body</label>
                <input type="text" className={bodyHasError ? classes.invalid : ''} value={body} id='body' onBlur={bodyBlurHandler} onChange={bodyChangeHandler} />
                {bodyHasError && <p>Body must be greater than 10 characters </p>}
            </div>
            <div className={classes['input-control']}>
                <button type="submit" disabled={!formIsValid}>Add Notes</button>
            </div>
        </form>
    )
}

export default AddNoteForm