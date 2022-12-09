import { create } from 'react-test-renderer'
import ProfileStatus from './ProfileStatus'

const mockCallback = jest.fn()

describe('Profile component', () => {
  test('status from props should be in state', () => {
    const component = create(<ProfileStatus status="test status working" updateStatus={ mockCallback } />)
    const instance = component.getInstance()
    // @ts-ignore
    expect(instance?.state.status).toBe('test status working')
  })

  test('after creation tag <p> with status should be displayed', () => {
    const component = create(<ProfileStatus status="test status working" updateStatus={ mockCallback } />)
    const root = component.root
    let tag = root.findByType('p')
    expect(tag).not.toBeNull()
  })

  test('after creation tag <p> with status should be displayed with correct status', () => {
    const component = create(<ProfileStatus status="test status working" updateStatus={ mockCallback } />)
    const root = component.root
    const tag = root.findByType('p')
    expect(tag.children[1]).toBe('test status working')
  })

  test('after creation tag <input> shouldn`t be displayed', () => {
    const component = create(<ProfileStatus status="test status working" updateStatus={ mockCallback } />)
    const root = component.root
    expect(() => {
      let tag = root.findByType('input')
    }).toThrow()
  })

  test('<input> should be displayed in editMode instead of <p>', () => {
    const component = create(<ProfileStatus status="test status working" updateStatus={ mockCallback } />)
    const root = component.root
    const paragraph = root.findByType('p')
    paragraph.props.onDoubleClick()
    const input = root.findByType('input')
    expect(input.props.value).toBe('test status working')
  })

  test('callback should be called', () => {
    const component = create(<ProfileStatus status="test status working" updateStatus={ mockCallback } />)
    const instance = component.getInstance()
    // @ts-ignore
    instance?.deactivateEditMode()
    expect(mockCallback.mock.calls.length).toBe(1)
  })
})
