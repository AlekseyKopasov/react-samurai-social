import React from 'react'
import styles from './FormControls.module.scss'

const FormControl = ({input, meta, ...props}) => {
  const hasError = meta.touched && meta.error

  return (
    <div className={styles.formControl + " " + (hasError ? styles.error : "")}>
      {props.children}
      { hasError && <span>{meta.error}</span> }
    </div>
  )
}

export const Textarea = (props) => {
  const {input, meta, ...restProps} = props
  return <FormControl {...props}> <textarea {...input} {...restProps}/> </FormControl>
}

export const Input = (props) => {
  const {input, meta, ...restProps} = props
  return <FormControl {...props}> <input {...input} {...restProps} autoComplete="off" autoCorrect="off" spellCheck="off"/> </FormControl>
}
