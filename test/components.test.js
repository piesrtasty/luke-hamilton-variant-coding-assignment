import React from 'react'
import renderer from 'react-test-renderer'
import { shallow, mount, configure } from 'enzyme'

import Adapter from 'enzyme-adapter-react-16'

configure({ adapter: new Adapter() })

import Header from '../components/header'
import Item from '../components/item'
import SuggestionInput, { StyledButton } from '../components/suggestion-input'

import sampleVariants from './sample-data/variants'

describe('Header', () => {
  test('it renders correctly', () => {
    expect(renderer.create(<Header />).toJSON()).toMatchSnapshot()
  })
})

describe('SuggestionInput', () => {
  test('it renders correctly', () => {
    expect(renderer.create(<SuggestionInput />).toJSON()).toMatchSnapshot()
  })
  test('it triggers handleOnSubmit on submit button click', () => {
    const handleOnSubmit = jest.fn()
    const el = shallow(<SuggestionInput handleOnSubmit={handleOnSubmit} />, {
      disableLifecycleMethods: true
    })
    el.find(StyledButton).simulate('click')
    const calls = handleOnSubmit.mock.calls
    expect(calls.length).toBe(1)
  })
  test('it triggers handleOnSubmit on submit button click', () => {
    const handleOnSubmit = jest.fn()
    const el = mount(<SuggestionInput handleOnSubmit={handleOnSubmit} />, {
      disableLifecycleMethods: true
    })
    el.find(StyledButton).simulate('click')
    const calls = handleOnSubmit.mock.calls
    expect(calls.length).toBe(1)
  })
})

describe('Table Item Row', () => {
  test('it renders correctly shaded', () => {
    expect(
      renderer.create(<Item data={sampleVariants[0]} shaded={true} />).toJSON()
    ).toMatchSnapshot()
  })
  test('it renders correctly not shaded', () => {
    expect(
      renderer.create(<Item data={sampleVariants[1]} shaded={false} />).toJSON()
    ).toMatchSnapshot()
  })
})
