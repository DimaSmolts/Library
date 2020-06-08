import React from 'react'
import { mount, ReactWrapper } from 'enzyme'
import { createBrowserHistory } from 'history'

import { SearchPanelContainer } from '../'

const history = createBrowserHistory()
const refresh = jest.fn()
const cleanUp = jest.fn()
const initSearchQuery = 'anything'
const userSearchQuery = 'something'

describe('SearchPanelContainer', () => {
  let wrapper: ReactWrapper<{}, {}, SearchPanelContainer>
  beforeEach(() => {
    wrapper = mount(
      <SearchPanelContainer
        refreshBooks={refresh}
        cleanUpBooks={cleanUp}
        queryParams={'?search=' + initSearchQuery}
        history={history} />)
  })

  test('sets search query in state correctly (init)', () => {
    expect(wrapper.state('query')).toBe(initSearchQuery)
  })

  test('invokes books refresh with right params after init', () => {
    expect(refresh).toBeCalledWith(initSearchQuery)
  })

  test('sets search query in state correctly (user search)', () => {
    const event = {
      currentTarget: {
        value: userSearchQuery,
      }
    } as React.FormEvent<HTMLInputElement>

    wrapper.instance().handleQueryChange(event)
    expect(wrapper.state('query')).toBe(userSearchQuery)
  })

  test('invokes books refresh and changes user URL', () => {
    const event = {
      preventDefault: () => { }
    } as React.FormEvent<HTMLInputElement>

    wrapper.instance().handleQuerySubmit(event)
    expect(refresh).toBeCalledWith(wrapper.state('query'))
    expect(history.location.pathname).toBe('/books')
    expect(history.location.search).toBe('?search=' + wrapper.state('query'))
  })

  test('cleans up in componentWillUnmount', () => {
    wrapper.unmount()
    expect(cleanUp).toBeCalled()
  })
})
