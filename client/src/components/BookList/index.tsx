import React from 'react'
import BookList from './BookList'
import Message, { MessageTypes, MessageTextSizes } from '../Message/Message'
import { connect, ConnectedProps } from 'react-redux'
import { AppState } from '../../store/rootReducer'

class BooksListContainer extends React.Component<PropsFromRedux> {
  render() {
    if (this.props.error)
      throw new Error(this.props.error.toString())
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

const connector = connect(mapState, null)
type PropsFromRedux = ConnectedProps<typeof connector>

export default connector(BooksListContainer)
