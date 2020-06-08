import React from 'react'
import { shallow, mount } from 'enzyme'

import BookDetails from '../BookDetails'
import { Book } from '../../../helpers/BookModel'

const book = {
  id: 1,
  name: 'Name',
  author: 'Author',
  rate: 8,
  image: 'image',
  genres: ['first', 'second'],
  description: 'description',
  price: 20
} as Book
const defaultCount = 0
const notZeroCount = 2
const addBookToCart = jest.fn()
const removeBookFromCart = jest.fn()

test('snapshot: <BookDetails /> renders correctly', () => {
  const wrapper = shallow(
    <BookDetails
      book={book}
      quantityOfAddedItems={defaultCount}
      addBookToCart={addBookToCart}
      removeBookFromCart={removeBookFromCart} />)

  expect(wrapper).toMatchSnapshot()
})

it('should add book', () => {
  const wrapper = shallow(
    <BookDetails
      book={book}
      quantityOfAddedItems={defaultCount}
      addBookToCart={addBookToCart}
      removeBookFromCart={removeBookFromCart} />)

  wrapper.find('.add-book-button').simulate('click')
  expect(addBookToCart).toBeCalled()
})

it('should remove book', () => {
  const wrapper = shallow(
    <BookDetails
      book={book}
      quantityOfAddedItems={defaultCount}
      addBookToCart={addBookToCart}
      removeBookFromCart={removeBookFromCart} />)

  wrapper.find('.remove-book-button').simulate('click')
  expect(removeBookFromCart).toBeCalled()
})

it('should have remove button disabled', () => {
  const wrapper = shallow(
    <BookDetails
      book={book}
      quantityOfAddedItems={defaultCount}
      addBookToCart={addBookToCart}
      removeBookFromCart={removeBookFromCart} />)

  expect(wrapper.find('.remove-book-button').prop('disabled')).toBeTruthy();
})

it('should not have remove button disabled', () => {
  const wrapper = shallow(
    <BookDetails
      book={book}
      quantityOfAddedItems={notZeroCount}
      addBookToCart={addBookToCart}
      removeBookFromCart={removeBookFromCart} />)

  expect(wrapper.find('.remove-book-button').prop('disabled')).toBeFalsy();
})
