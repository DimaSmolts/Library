import React from 'react';
import BookListContainer from '../BookList/BookListContainer';
import SearchPanelContainer from '../SearchPanel/SearchPanelContainer';

export default class BookListPage extends React.Component {
  render() {
    return <>
      <SearchPanelContainer />
      <BookListContainer />
    </>
  }
}
