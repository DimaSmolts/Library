import React from 'react'
import { shallow } from 'enzyme'

import BookList from '../BookList'
import { Book } from '../../../helpers/BookModel'

const books = [{}, {}, {}, {}] as Array<Book>

test('snapshot: <BookList /> renders correctly', () => {
  const tree = shallow(<BookList books={books} />)

  expect(tree).toMatchSnapshot()
})

it('should render all book cards', () => {
  const wrapper = shallow(<BookList books={books} />)

  expect(wrapper.find('div').children().length).toBe(books.length)
})
