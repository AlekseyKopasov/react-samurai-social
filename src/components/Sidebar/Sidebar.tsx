import React from 'react'
import styles from './Sidebar.module.scss'
import Navbar from '../Navbar/Navbar'
import Button from '../common/Button/Button'

const Sidebar: React.FC = () => {
  return (
    <aside className={ styles.sidebar }>
      <Navbar/>

      <div className={ styles.sidebar__logout }>
        <Button text="Выход" btnClass="button__link" />
      </div>
    </aside>
  )
}

export default Sidebar
