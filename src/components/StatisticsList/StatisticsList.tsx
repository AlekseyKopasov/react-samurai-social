import React from 'react'

const StatisticsList: React.FC = () => {
  return (
    <ul className="statistics__list">
      <li className="statistics_item">
        <span className="statistics__title">Постов</span>
        <span className="statistics__count">130</span>
      </li>
      <li className="statistics_item">
        <span className="statistics__title">Подписок</span>
        <span className="statistics__count">125</span>
      </li>
      <li className="statistics_item">
        <span className="statistics__title">Подписчиков</span>
        <span className="statistics__count">456</span>
      </li>
    </ul>
  )
}

export default StatisticsList
