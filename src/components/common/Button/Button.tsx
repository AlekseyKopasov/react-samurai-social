import React, { MouseEventHandler } from 'react'
import styles from './Button.module.scss'

type PropsType = {
  btnClass: string
  onClick?: (evt: MouseEventHandler<HTMLButtonElement>) => void
  clickHandler?: () => void
  disabled?: boolean
  text: React.ReactNode | string
}

const Button: React.FC<PropsType> = (props) => {
  return (
    <button
      className={ [ styles.button, props.btnClass && props.btnClass ].join(' ') }
      onClick={ props.clickHandler }
      disabled={ props.disabled || false }
    >
      { props.text }
    </button>
  )
}

export default Button
