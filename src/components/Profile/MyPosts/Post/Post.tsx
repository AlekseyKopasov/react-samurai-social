import React from 'react'
import s from './Post.module.css'

type PropsType = {
  message: string | null
  likesCount: number | null
  id: number
}

const Post: React.FC<PropsType> = ({ message, likesCount }) => {
  return (
    <li className={ s.item }>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSq_I0JFO2DxoAV3J-sI7ajtx0qW0Q5neaY_A&usqp=CAU"
           alt=""/>
      <p>{ message }</p>
      <p>{ `Likes: ${ likesCount }` }</p>
    </li>
  )
}

export default Post
