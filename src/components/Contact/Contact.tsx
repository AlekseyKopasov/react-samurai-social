import React, { ReactNode } from 'react'

type PropsType = {
  title: string
  value: ReactNode
}

const Contact: React.FC<PropsType> = ({ title, value }) => {
  return <div><b>{ title }</b>: { value || '---' }</div>
}

export default Contact
