import React from 'react'
import renderer from 'react-test-renderer'

import Message, { MessageTypes, MessageTextSizes } from '../Message'
import { mount } from 'enzyme'

test('snapshot: <Message /> renders correctly', () => {
  const tree = renderer.create(
    <Message
      type={MessageTypes.msgInfo}
      size={MessageTextSizes.msgMedium}
      text='hey' />
  ).toJSON()

  expect(tree).toMatchSnapshot()
})

it('should map Message props to css classes correctly', () => {
  const message = mount(
    <Message
      type={MessageTypes.msgInfo}
      size={MessageTextSizes.msgMedium}
      text='hey' />)

  expect(message.find('div').hasClass('message-container')).toBeTruthy()
  expect(message.find('p').hasClass('message')).toBeTruthy()
  expect(message.find('p').hasClass('msgMedium')).toBeTruthy()
  expect(message.find('p').hasClass('msgInfo')).toBeTruthy()
  expect(message.find('p').text().includes('hey'))
})
