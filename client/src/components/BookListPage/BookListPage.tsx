import React from 'react'
import BookListContainer from '../BookList/BookListContainer'
import SearchPanelContainer, { SearchPanelProps } from '../SearchPanel/SearchPanelContainer'

export default class BookListPage extends React.Component<SearchPanelProps> {
  render() {
    return <>
      <SearchPanelContainer queryParams={this.props.queryParams} history={this.props.history} />
      <BookListContainer />
    </>
  }
}
