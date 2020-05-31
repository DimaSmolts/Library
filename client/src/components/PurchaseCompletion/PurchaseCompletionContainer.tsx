import React from 'react'
import { AppState } from '../../store/rootReducer'
import { connect, ConnectedProps } from 'react-redux';
import { addBookToCartThunk, removeBookFromCartThunk } from '../../store/thunks/cartThunks';
import { Book } from '../../helpers/BookModel';
import PurchaseCompletion from './PurchaseCompletion';
import Message, { MessageTypes, MessageTextSizes } from '../Message/Message';

class PurchaseCompletionContainer extends React.Component<PropsFromRedux> {

  handlePurchaseCompletion(event: React.FormEvent<EventTarget>) {
    alert('Thanks!');
  }

  render() {
    return this.props.bookCartRecords.length === 0 ?
      <Message type={MessageTypes.msgInfo} size={MessageTextSizes.msgBig} text='Nothing added to the cart' />
      :
      <PurchaseCompletion
        bookCartRecords={this.props.bookCartRecords}
        handlePurchaseCompletion={this.handlePurchaseCompletion}
        addBookToCart={this.props.addBookToCart}
        removeBookFromCart={this.props.removeBookFromCart} />
  }
}

const mapState = (state: AppState) => ({
  bookCartRecords: state.cartReducer.bookRecords
})

const mapDispatch = {
  addBookToCart: (book: Book) => addBookToCartThunk(book),
  removeBookFromCart: (book: Book) => removeBookFromCartThunk(book),
}

const connector = connect(mapState, mapDispatch);
type PropsFromRedux = ConnectedProps<typeof connector>

export default connector(PurchaseCompletionContainer)
