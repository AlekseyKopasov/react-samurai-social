import profileReducer, { actions } from './profileReducer'
import { ProfileType } from '../../types/types'

const state = {
  posts: [
    { id: 1, message: 'Mock', likesCount: 10 },
    { id: 2, message: 'Mock', likesCount: 11 },
    { id: 3, message: 'Mock', likesCount: 12 },
    { id: 4, message: 'Mock', likesCount: 13 },
  ],
  profile: null,
  status: '',
}

it('post length should be incremented', () => {
  const action = actions.addPost('Test post text')
  const newState = profileReducer(state, action)
  expect(newState.posts.length).toBe(5)
})

it('post text should be correct', () => {
  const action = actions.addPost('Test post text')
  const newState = profileReducer(state, action)
  expect(newState.posts[4].message).toBe('Test post text')
})

it('after deleting length of messages should be decremented', () => {
  const action = actions.deletePost(1)
  const newState = profileReducer(state, action)
  expect(newState.posts.length).toBe(3)
})

it('after deleting length shouldn`t decrement if ID is incorrect', () => {
  const action = actions.deletePost(1000)
  const newState = profileReducer(state, action)
  expect(newState.posts.length).toBe(4)
})
