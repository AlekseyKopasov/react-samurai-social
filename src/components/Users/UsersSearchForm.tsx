import { Field, Form, Formik } from 'formik'
import React, { memo } from 'react'
import { FilterType } from '../../redux/reducers/usersReducer'

const usersSearchFormValidate = (values: any) => {
  const errors = {}
  return errors
}

type PropsType = {
  onFilterChanged: (filter: FilterType) => void
}

export const UsersSearchForm: React.FC<PropsType> = memo(({ onFilterChanged }) => {
  const submit = (values: FilterType, { setSubmitting }: { setSubmitting: (isSubmitting: boolean) => void }) => {
    onFilterChanged(values)
    setSubmitting(false)
  }

  return <div>
    <Formik
      initialValues={ { term: '' } }
      validate={ usersSearchFormValidate }
      onSubmit={ submit }
    >
      { ({ isSubmitting }) => (
        <Form>
          <Field type="text" name="term"/>
          <button type="submit" disabled={ isSubmitting }>
            Find
          </button>
        </Form>
      ) }
    </Formik>
  </div>
})
