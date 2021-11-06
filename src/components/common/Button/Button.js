import React from 'react'
import styles from './Button.module.scss'

const Button = (props) => {
  return (
    <button
      className={[styles.button, props.btnClass && props.btnClass].join(" ")}
      onClick={props.clickHander}
    >
      { props.text }
    </button>
  )
}

export default Button
