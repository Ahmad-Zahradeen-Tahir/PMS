import React from 'react'
import classes from './Input.module.css'

const Input = (props) => {
  return (
    <div className={classes.inputBody}>
      <label htmlFor={props.id}>{props.children}</label>
      <input id={props.id} type={props.type} placeholder={props.placeholder} onChange={props.onChange} />
    </div>
  )
}

export default Input
