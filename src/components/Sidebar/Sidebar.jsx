import React from 'react'
import styles from './Sidebar.module.css'
import Navbar from '../Navbar/Navbar'

const Sidebar = () => {
  return (
    <aside className={styles.sidebar}>

      <div className="userInfo">
        <div className="userAvatar">
          <img src="" alt=""/>
        </div>
        <div className={styles.sidebarUserStatistics}>
          <ul className="userStatistics">
            <li className="userStatisticsItem">
              <span className="userStatisticsTitle">Постов</span>
              <span className="userStatisticsCount">130</span>
            </li>
            <li className="userStatisticsItem">
              <span className="userStatisticsTitle">Подписок</span>
              <span className="userStatisticsCount">125</span>
            </li>
            <li className="userStatisticsItem">
              <span className="userStatisticsTitle">Подписчиков</span>
              <span className="userStatisticsCount">456</span>
            </li>
          </ul>
        </div>
      </div>

      <Navbar />

      <div className={styles.sidebarLogout}>
        <button className="btn">Выход</button>
      </div>
    </aside>
  )
}

export default Sidebar
