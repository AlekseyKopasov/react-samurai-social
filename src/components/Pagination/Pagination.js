import React from 'react'
import styles from './Pagination.module.scss'

const Pagination = (props) => {
  return (
    <ul className={styles.pagination}>
      { props.pages.map(p => {
        if (p <= 100) { // TODO dev only
          return <li className={styles.pagination__item} key={p}>
            <button
               className={styles.pagination__link + " " + (props.currentPage === p && styles["selected-page"])}
               onClick={() => {props.onPageChanged(p)}}>
              {p}
            </button>
          </li>
        }
        return false
      }) }
    </ul>
  )
}

export default Pagination
