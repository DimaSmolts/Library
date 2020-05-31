import { Book } from '../../helpers/BookModel'

// constants
export const ADD_BOOK_TO_CART = 'ADD_BOOK_TO_CART'
export const REMOVE_BOOK_FROM_CART = 'REMOVE_BOOK_FROM_CART'
export const CLEAN_UP_CART = 'CLEAN_UP_CART'

// actions
type AddBookToCartAction = {
  type: typeof ADD_BOOK_TO_CART,
  book: Book,
}
type RemoveBookFromCartAction = {
  type: typeof REMOVE_BOOK_FROM_CART,
  book: Book,
}
type CleanUpCartAction = {
  type: typeof CLEAN_UP_CART,
}

// actionCreators
export const addBookToCart = (book: Book): AddBookToCartAction => {
  return {
    type: ADD_BOOK_TO_CART,
    book: book,
  };
}
export const removeBookFromCart = (book: Book): RemoveBookFromCartAction => {
  return {
    type: REMOVE_BOOK_FROM_CART,
    book: book,
  };
}
export const cleanUpCart = (): CleanUpCartAction => {
  return {
    type: CLEAN_UP_CART,
  };
}

export type CartActions =
  AddBookToCartAction
  | RemoveBookFromCartAction
  | CleanUpCartAction
