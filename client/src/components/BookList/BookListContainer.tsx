import React from 'react';
import BookList from './BookList'
import Message, { MessageTypes, MessageTextSizes } from '../Message/Message'
import { getBooksThunk, cleanUpThunk } from '../../store/thunks/bookListThunks'
import { connect, ConnectedProps } from 'react-redux';
import { AppState } from '../../store/rootReducer';

class BooksListContainer extends React.Component<PropsFromRedux> {
  componentDidMount() {
    this.props.getBooks();
  }

  componentWillUnmount() {
    this.props.cleanUp();
  }

  render() {
    if (this.props.error)
      throw new Error(this.props.error.toString());

    return <>
      {
        this.props.areFetched ?
          <BookList books={this.props.books} />
          :
          <Message type={MessageTypes.msgInfo} size={MessageTextSizes.msgBig} text='Loading...' />
      }
    </>
  }
}

const mapState = (state: AppState) => ({
  books: state.bookListReducer.books,
  areFetched: state.bookListReducer.areFetched,
  error: state.bookListReducer.areFetched
})


const mapDispatch = {
  getBooks: () => getBooksThunk(),
  cleanUp: () => cleanUpThunk(),
}

const connector = connect(mapState, mapDispatch);
type PropsFromRedux = ConnectedProps<typeof connector>

export default connector(BooksListContainer)
