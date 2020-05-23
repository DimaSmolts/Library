import React from 'react';
import { BookNavParams } from '../BookPage/BookPage'
import BookDetails from './BookDetails'
import Message, { MessageTypes, MessageTextSizes } from '../Message/Message'
import { getBookThunk, cleanUpThunk } from '../../store/thunks/bookThunks'
import { connect, ConnectedProps } from 'react-redux';
import { AppState } from '../../store/rootReducer'


class BookDetailsContainer extends React.Component<BookNavParams & PropsFromRedux> {
  componentDidMount() {
    this.props.getBook(+this.props.bookId);
  }

  componentWillUnmount() {
    this.props.cleanUp();
  }

  render() {
    if (this.props.error)
      throw new Error(this.props.error.toString());

    return <>
      {
        this.props.isFetched ?
          <BookDetails book={this.props.book} />
          :
          <Message type={MessageTypes.msgInfo} size={MessageTextSizes.msgBig} text='Loading...' />
      }
    </>
  }
}

const mapState = (state: AppState) => ({
  book: state.bookReducer.book,
  isFetched: state.bookReducer.isFetched,
  error: state.bookReducer.error
})


const mapDispatch = {
  getBook: (id: number) => getBookThunk(id),
  cleanUp: () => cleanUpThunk(),
}

const connector = connect(mapState, mapDispatch);
type PropsFromRedux = ConnectedProps<typeof connector>

export default connector(BookDetailsContainer)
