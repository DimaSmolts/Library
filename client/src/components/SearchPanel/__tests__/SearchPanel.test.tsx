import React from 'react'
import { shallow, mount } from 'enzyme'

import SearchPanel from '../SearchPanel'

const query = 'anything'
const handleChange = jest.fn()
const handleSubmit = jest.fn()

test('snapshot: <SearchPanel /> renders correctly', () => {
  const tree = shallow(
    <SearchPanel
      query={query}
      handleQueryChange={handleChange}
      handleQuerySubmit={handleSubmit} />)

  expect(tree).toMatchSnapshot()
})

it('should submit form', () => {
  const wrapper = mount(<SearchPanel
    query={query}
    handleQueryChange={handleChange}
    handleQuerySubmit={handleSubmit} />)

  wrapper.find('form').simulate('submit')
  expect(handleSubmit).toBeCalled()
})
