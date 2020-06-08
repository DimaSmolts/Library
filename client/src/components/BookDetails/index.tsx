import React from 'react'
import { BookNavParams } from '../BookPage/BookPage'
import BookDetails from './BookDetails'
import Message, { MessageTypes, MessageTextSizes } from '../Message/Message'
import { getBookThunk, cleanUpThunk } from '../../store/thunks/bookThunks'
import { connect, ConnectedProps } from 'react-redux'
import { AppState } from '../../store/rootReducer'
import { Book } from '../../helpers/BookModel'
import { addBookToCartThunk, removeBookFromCartThunk } from '../../store/thunks/cartThunks'

class BookDetailsContainer extends React.Component<BookNavParams & PropsFromRedux> {
  componentDidMount() {
    this.props.getBook(+this.props.bookId)
  }

  componentWillUnmount() {
    this.props.cleanUp()
  }

  render() {
    if (this.props.error)
      throw new Error(this.props.error.toString())
    if (this.props.notFound)
      return <Message type={MessageTypes.msgNotFound} size={MessageTextSizes.msgBig} text='Not Found' />

    return <>
      {
        this.props.isFetched ?
          <BookDetails
            book={this.props.book}
            quantityOfAddedItems={this.props.quantityOfAddedItems}
            addBookToCart={this.props.addBookToCart}
            removeBookFromCart={this.props.removeBookFromCart} />
          :
          <Message type={MessageTypes.msgInfo} size={MessageTextSizes.msgBig} text='Loading...' />
      }
    </>
  }
}

const mapState = (state: AppState) => ({
  book: state.bookReducer.book,
  isFetched: state.bookReducer.isFetched,
  error: state.bookReducer.error,
  notFound: state.bookReducer.notFound,
  quantityOfAddedItems: state.cartReducer.bookRecords.find(br => br.book.id === state.bookReducer.book ?.id) ?.quantity || 0,
})

const mapDispatch = {
  getBook: (id: number) => getBookThunk(id),
  cleanUp: () => cleanUpThunk(),
  addBookToCart: (book: Book) => addBookToCartThunk(book),
  removeBookFromCart: (book: Book) => removeBookFromCartThunk(book),
}

const connector = connect(mapState, mapDispatch)
type PropsFromRedux = ConnectedProps<typeof connector>

export default connector(BookDetailsContainer)
