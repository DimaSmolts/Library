import React from 'react'
import { shallow } from 'enzyme'

import PurchaseCompletion from '../PurchaseCompletion'
import { BookCartRecord } from '../../../helpers/BookCartRecord'

const bookCartRecords = [{ quantity: 2, book: { name: 'any', price: 20 } },] as Array<BookCartRecord>
const handleCompletion = jest.fn()
const addBookToCart = jest.fn()
const removeBookFromCart = jest.fn()

test('snapshot: <PurchaseCompletion /> renders correctly', () => {
  const tree = shallow(
    <PurchaseCompletion
      bookCartRecords={bookCartRecords}
      handlePurchaseCompletion={handleCompletion}
      addBookToCart={addBookToCart}
      removeBookFromCart={removeBookFromCart} />)

  expect(tree).toMatchSnapshot()
})

it('should submit purchase', () => {
  const wrapper = shallow(
    <PurchaseCompletion
      bookCartRecords={bookCartRecords}
      handlePurchaseCompletion={handleCompletion}
      addBookToCart={addBookToCart}
      removeBookFromCart={removeBookFromCart} />)

  wrapper.find('.submit-purchase').simulate('click')
  expect(handleCompletion).toBeCalled()
})
