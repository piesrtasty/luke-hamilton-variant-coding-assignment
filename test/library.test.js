import React from 'react'
import renderer from 'react-test-renderer'
import { shallow, configure } from 'enzyme'

import Adapter from 'enzyme-adapter-react-16'

configure({ adapter: new Adapter() })

import DebouncedInput from '../shared/library/inputs/debounced'

describe('DebouncedInput', () => {
  test('it renders correctly', () => {
    expect(renderer.create(<DebouncedInput />).toJSON()).toMatchSnapshot()
  })
  test('it triggers onKeyDown', () => {
    const onKeyDown = jest.fn()
    const el = shallow(<DebouncedInput onKeyDown={onKeyDown} />, {
      disableLifecycleMethods: true
    })
    el.simulate('keydown')
    const calls = onKeyDown.mock.calls
    expect(calls.length).toBe(1)
  })
})
