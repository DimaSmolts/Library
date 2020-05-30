import React from 'react';
import BookList from './BookList'
import Message, { MessageTypes, MessageTextSizes } from '../Message/Message'
import { getBooksThunk, cleanUpThunk } from '../../store/thunks/bookListThunks'
import { connect, ConnectedProps } from 'react-redux';
import { AppState } from '../../store/rootReducer';
import { BookListNavParams } from '../BookListPage/BookListPage';

class BooksListContainer extends React.Component<PropsFromRedux & BookListNavParams> {
  componentDidMount() {
    const searchQuery = new URLSearchParams(this.props.queryParams).get('search') || '';
    this.props.getBooks(searchQuery);
  }

  componentWillUnmount() {
    this.props.cleanUp();
  }

  render() {
    if (this.props.error)
      throw new Error(this.props.error.toString());
    if (this.props.notFound)
      return <Message type={MessageTypes.msgNotFound} size={MessageTextSizes.msgBig} text='Not Found' />

    return <>
      {
        this.props.areBooksFetched ?
          <BookList books={this.props.books} />
          :
          <Message type={MessageTypes.msgInfo} size={MessageTextSizes.msgBig} text='Loading...' />
      }
    </>
  }
}

const mapState = (state: AppState) => ({
  books: state.bookListReducer.books,
  areBooksFetched: state.bookListReducer.areFetched,
  error: state.bookListReducer.error,
  notFound: state.bookListReducer.notFound
})


const mapDispatch = {
  getBooks: (query: string) => getBooksThunk(query),
  cleanUp: () => cleanUpThunk(),
}

const connector = connect(mapState, mapDispatch);
type PropsFromRedux = ConnectedProps<typeof connector>

export default connector(BooksListContainer)
