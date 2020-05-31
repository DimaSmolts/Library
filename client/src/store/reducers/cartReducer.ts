import { Book } from '../../helpers/BookModel'
import {
  ADD_BOOK_TO_CART,
  REMOVE_BOOK_FROM_CART,
  CLEAN_UP_CART,
  CartActions,
} from '../actions/cartActions'

export interface BookCartRecord {
  book: Book,
  quantity: number,
}

// TODO: try to find a way to use Dictionary<Book, number>
const initialCartState = {
  bookRecords: [] as Array<BookCartRecord>,
  totalPrice: 0
}

export type CartState = typeof initialCartState;

export function cartReducer(state: CartState = initialCartState, action: CartActions): CartState {
  switch (action.type) {
    case ADD_BOOK_TO_CART:
      return {
        bookRecords: state.bookRecords.map(br => br.book).includes(action.book)
          ?
          state.bookRecords.map(br => br.book.id === action.book.id ? { book: br.book, quantity: br.quantity += 1 } : br)
          :
          [...state.bookRecords, { book: action.book, quantity: 1 }],
        totalPrice: state.totalPrice + action.book.price,
      }
    case REMOVE_BOOK_FROM_CART:
      return {
        bookRecords: state.bookRecords.find(br => br.book.id === action.book.id).quantity === 1 ?
          state.bookRecords.filter(br => br.book.id !== action.book.id)
          :
          state.bookRecords.map(br => br.book.id === action.book.id ? { book: br.book, quantity: br.quantity -= 1 } : br),
        totalPrice: state.totalPrice - action.book.price,
      }
    case CLEAN_UP_CART:
      return {
        bookRecords: [],
        totalPrice: 0,
      }
    default:
      return state;
  }
}
