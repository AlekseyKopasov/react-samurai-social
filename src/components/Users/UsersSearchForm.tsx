import { Field, Form, Formik } from 'formik'
import React, { memo } from 'react'
import { FilterType } from '../../redux/reducers/usersReducer'

const usersSearchFormValidate = (values: any) => {
  const errors = {}
  return errors
}

type FriendFormType = 'true' | 'false' | 'null'

type FormType = {
  term: string,
  friend: 'true' | 'false' | 'null'
}

type PropsType = {
  onFilterChanged: (filter: FilterType) => void
}

export const UsersSearchForm: React.FC<PropsType> = memo(({ onFilterChanged }) => {
  const submit = (values: FormType, { setSubmitting }: { setSubmitting: (isSubmitting: boolean) => void }) => {
    const filter: FilterType = {
      term: values.term,
      friend: values.friend === 'null' ? null : values.friend === 'true' ? true : false
    }

    onFilterChanged(filter)
    setSubmitting(false)
  }

  return <div>
    <Formik
      initialValues={{term: filter.term, friend: String(filter.friend) as FriendFormType}}
      validate={ usersSearchFormValidate }
      onSubmit={ submit }
    >
      { ({ isSubmitting }) => (
        <Form>
          <Field type="text" name="term"/>
          <Field name="friend" as="select">
            <option value="null">All</option>
            <option value="true">Follow</option>
            <option value="false">Unfollow</option>
          </Field>
          <button type="submit" disabled={ isSubmitting }>
            Find
          </button>
        </Form>
      ) }
    </Formik>
  </div>
})
