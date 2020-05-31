import React from 'react'
import BookListContainer from '../BookList'
import SearchPanelContainer, { SearchPanelProps } from '../SearchPanel'

export default class BookListPage extends React.Component<SearchPanelProps> {
  render() {
    return <>
      <SearchPanelContainer queryParams={this.props.queryParams} history={this.props.history} />
      <BookListContainer />
    </>
  }
}
