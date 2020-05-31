import {
  addBookToCart,
  removeBookFromCart,
  cleanUpCart,
} from '../actions/cartActions'
import { Book } from '../../helpers/BookModel'
import { Dispatch } from 'redux'

export const addBookToCartThunk = (book: Book) => {
  return (dispatch: Dispatch) => {
    dispatch(addBookToCart(book))
  }
}

export const removeBookFromCartThunk = (book: Book) => {
  return (dispatch: Dispatch) => {
    dispatch(removeBookFromCart(book))
  }
}

export const cleanUpThunk = () => {
  return (dispatch: Dispatch) => {
    dispatch(cleanUpCart())
  }
}
