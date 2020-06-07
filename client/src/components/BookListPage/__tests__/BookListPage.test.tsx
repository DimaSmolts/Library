import React from 'react'
import { shallow } from 'enzyme'
import { createBrowserHistory } from 'history'

import BookListPage from '../BookListPage'

const queryParams = 'anything'
const history = createBrowserHistory()

test('snapshot: <BookListPage /> renders correctly', () => {
  const tree = shallow(
    <BookListPage queryParams={queryParams} history={history} />)

  expect(tree).toMatchSnapshot()
})
