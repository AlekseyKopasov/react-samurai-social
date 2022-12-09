import usersReducer, { actions, InitialStateType } from './usersReducer'

let state: InitialStateType

beforeEach(() => {
  state = {
    users: [
      {
      id: 0,
      name: 'User 1',
      status: '',
      followed: false,
      photos: {
        large: null,
        small: null,
      },
    },
      {
      id: 1,
      name: 'User 2',
      status: '',
      followed: true,
      photos: {
        large: null,
        small: null,
      },
    },
      {
      id: 2,
      name: 'User 3',
      status: '',
      followed: false,
      photos: {
        large: null,
        small: null,
      },
    },
      {
        id: 3,
        name: 'User 4',
        status: '',
        followed: true,
        photos: {
          large: null,
          small: null,
        },
      }
    ],
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: [],
  }
})

test('Follow success is worked', () => {
  const newState = usersReducer(state, actions.followSuccess(3))

  expect(newState.users[0].followed).toBeFalsy()
  expect(newState.users[3].followed).toBeTruthy()
})
test('Unfollow success is worked', () => {
  const newState = usersReducer(state, actions.unfollowSuccess(3))

  expect(newState.users[1].followed).toBeTruthy()
  expect(newState.users[3].followed).toBeFalsy()
})
