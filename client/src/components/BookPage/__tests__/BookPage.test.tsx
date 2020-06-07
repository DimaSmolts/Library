import React from 'react'
import { shallow } from 'enzyme'

import BookPage from '../BookPage'

const bookId = '1'

test('snapshot: <BookPage /> renders correctly', () => {
  const tree = shallow(
    <BookPage bookId={bookId} />)

  expect(tree).toMatchSnapshot()
})
