import React from 'react'
import App from './App'
import { shallow } from 'enzyme';

describe('App', () => {

  let wrapper

  beforeEach(() => {
    wrapper = shallow(<App />)
  })

  it('should have the `th` "Items"', () => {
    expect(
        wrapper.contains(<th>Items</th>)
    ).toBe(true);
  })

  it('should have a button elem', () => {
    expect(
        wrapper.containsMatchingElement(<button>Add item</button>)
    ).toBe(true)
  })

  it('should have a button elem disabled', () => {
    expect(
        wrapper.containsMatchingElement(<button disabled={true}>Add item</button>)
    ).toBe(true)
  })

  it('should have a input elem', () => {
    expect(
        wrapper.containsMatchingElement(<input />)
    ).toBe(true)
  })

  it('should have a button elem disabled ver2', () => {
    const button = wrapper.find('button').first()
    expect(button.props().disabled).toBe(true)
  })
})