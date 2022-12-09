import React from 'react'
import { create } from 'react-test-renderer'
import Pagination from './Pagination'

describe('Paginator component test', () => {
  test('page count is 11 should be showed only 10', () => {
    const component = create(<Pagination totalItemsCount={ 11 } pageSize={ 1 } portionSize={ 10 } />)
    const root = component.root
    let items = root.findAllByType('li')
    expect(items.length).toBe(10)
  })
  test('page count is more then 10 buttons NEXT should be present', () => {
    const component = create(<Pagination totalItemsCount={ 11 } pageSize={ 1 } portionSize={ 10 } />)
    const root = component.root
    let button = root.findAllByType('button')
    expect(button.length).toBe(11)
  })
})
