import React from 'react'
import styles from './Pagination.module.scss'

const Pagination = (props) => {
  return (
    <ul className={styles.pagination}>
      { props.pages.map(p => {
        if (p <= 5) { // TODO dev only
          return <li className={styles.pagination__item} key={p}>
            <a
              href="#"
              className={styles.pagination__link + " " + (props.currentPage === p && styles["selected-page"])}
              onClick={ () => {props.onPageChanged(p)} }
            >
              {p}
            </a>
          </li>
        }
        return false
      }) }
    </ul>
  )
}

export default Pagination
