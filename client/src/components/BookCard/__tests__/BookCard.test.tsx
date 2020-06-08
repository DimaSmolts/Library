import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import renderer from 'react-test-renderer'
import { mount } from 'enzyme'

import BookCard from '../BookCard'
import { Book } from '../../../helpers/BookModel'

const book = { id: 1, name: 'name', image: 'image', author: 'author' } as Book

test('snapshot: <BookCard /> renders correctly', () => {
  const tree = renderer.create(
    <BrowserRouter>
      <BookCard book={book} />
    </BrowserRouter>
  ).toJSON()

  expect(tree).toMatchSnapshot()
})

describe('BookCard component', () => {
  it('should build link to BookDetails correctly', () => {
    const wrapper = mount(
      <BrowserRouter>
        <BookCard book={book} />
      </BrowserRouter>)

    expect(wrapper.find('a').prop('href')).toBe('/books/' + book.id)
  })

  it('should render book name and image src correctly', () => {
    const wrapper = mount(
      <BrowserRouter>
        <BookCard book={book} />
      </BrowserRouter>)

    expect(wrapper.find('h3').text()).toBe(book.name)
    expect(wrapper.find('img').prop('src')).toBe(book.image)
  })
})
