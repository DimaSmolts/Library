import React from 'react'
import { shallow } from 'enzyme'

import PurchasePage from '../PurchasePage'

test('snapshot: <PurchasePage /> renders correctly', () => {
  const tree = shallow(
    <PurchasePage />)

  expect(tree).toMatchSnapshot()
})
