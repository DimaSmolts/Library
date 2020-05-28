import React from 'react';
import BookListContainer from '../BookList/BookListContainer';
import SearchPanelContainer from '../SearchPanel/SearchPanelContainer';

export interface BookListNavParams {
  queryParams: string,
}

export interface BookListHistory {
  history: any,
}

export default class BookListPage extends React.Component<BookListNavParams & BookListHistory> {
  render() {
    return <>
      <SearchPanelContainer history={this.props.history} />
      <BookListContainer queryParams={this.props.queryParams} />
    </>
  }
}
