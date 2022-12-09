import React, { useState } from 'react'
import styles from './Pagination.module.scss'

type PropsType = {
  totalItemsCount: number
  pageSize: number
  currentPage?: number
  onPageChanged?: (pageNumber: number) => void
  portionSize?: number
}

const Pagination: React.FC<PropsType> = ({
                                           totalItemsCount,
                                           pageSize,
                                           currentPage = 1,
                                           onPageChanged = x => x,
                                           portionSize = 10,
                                         }) => {
  let pagesCount = Math.ceil(totalItemsCount / pageSize)
  let pages: Array<number> = []

  for (let i = 1; i <= pagesCount; i += 1) {
    pages.push(i)
  }

  const portionCount = Math.ceil(pagesCount / portionSize)
  const [ portionNumber, setPortionNumber ] = useState(1)

  const leftPortionPageNumber = (portionNumber - 1) * portionSize + 1
  const rightPortionPageNumber = portionNumber * portionSize

  return (
    <div className={ styles.pagination }>
      { portionNumber > 1 && <button className={ styles.pagination__button } onClick={ () => {
        setPortionNumber(portionNumber - 1)
      } }>PREV</button> }
      <ul className={ styles.pagination__list }>
        { pages
          .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
          .map(p => {
            return <li className={ styles.pagination__item } key={ p }>
              <button
                className={ styles.pagination__link + ' ' + (currentPage === p && styles['selected-page']) }
                onClick={ () => {
                  onPageChanged(p)
                } }>
                { p }
              </button>
            </li>
          }) }
      </ul>
      { portionCount > portionNumber && <button className={ styles.pagination__button } onClick={ () => {
        setPortionNumber(portionNumber + 1)
      } }>NEXT</button> }
    </div>
  )
}

export default Pagination
