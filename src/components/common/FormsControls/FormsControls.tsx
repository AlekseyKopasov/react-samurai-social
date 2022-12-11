import React from 'react'
import styles from './FormControls.module.scss'
import { Field, WrappedFieldMetaProps, WrappedFieldProps } from 'redux-form'
import { FieldValidator } from '../../../utils/validators/validators'

type FormControlPropsType = {
  meta: WrappedFieldMetaProps
  children: React.ReactNode
}

const FormControl: React.FC<FormControlPropsType> = ({
                                                       meta: { touched, error },
                                                       children,
                                                       ...props
                                                     }) => {
  const hasError = touched && error

  return (
    <div className={ styles.formControl + ' ' + (hasError ? styles.error : '') }>
      { children }
      { hasError && <span>{ error }</span> }
    </div>
  )
}

export const Textarea: React.FC<WrappedFieldProps> = (props) => {
  const { input, meta, ...restProps } = props
  return <FormControl { ...props }> <textarea { ...input } { ...restProps }/> </FormControl>
}

export const Input: React.FC<WrappedFieldProps> = (props) => {
  const { input, meta, ...restProps } = props
  return <FormControl { ...props }> <input { ...input } { ...restProps }/></FormControl>
}

export function createField<FormsKeysType extends string>(
  type: string,
  component: React.FC<WrappedFieldProps>,
  validators: Array<FieldValidator> | null,
  text = '',
  name: FormsKeysType,
  props = {},
) {
  return (
    <div>
      <Field
        name={ name }
        type={ type }
        component={ component }
        validate={ validators }
        { ...props }
      /> { text }
    </div>
  )
}

export type GetStringKeys<T> = Extract<keyof T, string>
