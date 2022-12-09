import React from 'react'
import s from './ProfileInfo.module.css'
import Contact from '../../Contact/Contact'
import { createField, GetStringKeys, Input, Textarea } from '../../common/FormsControls/FormsControls'
import { InjectedFormProps, reduxForm } from 'redux-form'
import styles from '../../common/FormsControls/FormControls.module.scss'
import { ProfileType } from '../../../types/types'

type PropsType = {
  profile: ProfileType
}

type ProfileFormValuesTypeKeys = GetStringKeys<ProfileType>

const ProfileForm: React.FC<InjectedFormProps<ProfileType, PropsType> & PropsType> = ({
                                                                                        handleSubmit,
                                                                                        error,
                                                                                        profile,
                                                                                      }) => {
  return <form className={ s.descriptionBlock } onSubmit={ handleSubmit }>
    { error && <div className={ styles.formSummaryError }>{ error }</div> }
    <button>Save</button>
    <div><b>Full name: </b>
      { createField<ProfileFormValuesTypeKeys>(
        'text',
        Input,
        null,
        'Enter full name',
        'fullName',
      ) }
    </div>

    <h3>Profile info</h3>
    { createField<ProfileFormValuesTypeKeys>(
      'text',
      Textarea,
      null,
      '',
      'aboutMe',
      {
        placeholder: profile.aboutMe || ''
      }
    ) }

    <div>contacts: { Object.keys(profile.contacts).map(contact => {
      return <Contact
        title={ contact }
        // TODO create some solution for embedded objets
        value={ createField(
          'text',
          Input,
          null,
          '',
          `{contacts.${ contact }`,
        ) }
        key={ contact }
      />
    }) }
    </div>

    <div>
      <div>
        <b>Looking For A Job: </b>
        { createField(
          'checkbox',
          Input,
          null,
          '',
          'lookingForAJob',
          {
            'checked': true,
          },
        ) }
      </div>
      <div>
        <b>Looking For A Job Description: </b>
        { createField(
          'textarea',
          Textarea,
          null,
          '',
          'lookingForAJobDescription',
          {
            value: profile.lookingForAJobDescription || '',
          }
        ) }
      </div>
    </div>
  </form>
}

const ProfileDataForm = reduxForm<ProfileType, PropsType>({ form: 'edit-profile' })(ProfileForm)

export default ProfileDataForm
