import { Book } from '../../../helpers/BookModel'
import {
  ADD_BOOK_TO_CART,
  REMOVE_BOOK_FROM_CART,
  CLEAN_UP_CART,
  addBookToCart,
  removeBookFromCart,
  cleanUpCart,
  AddBookToCartAction,
  RemoveBookFromCartAction,
  CleanUpCartAction,
} from '../cartActions'

describe('actions:', () => {
  it('should create an addBookToCart action ', () => {
    const book = {} as Book
    const expectedAction = {
      type: ADD_BOOK_TO_CART,
      book: book,
    } as AddBookToCartAction

    expect(addBookToCart(book)).toEqual(expectedAction)
  })

  it('should create an removeBookFromCart action ', () => {
    const book = {} as Book
    const expectedAction = {
      type: REMOVE_BOOK_FROM_CART,
      book: book,
    } as RemoveBookFromCartAction

    expect(removeBookFromCart(book)).toEqual(expectedAction)
  })

  it('should create an cleanUpCart action ', () => {
    const expectedAction = {
      type: CLEAN_UP_CART,
    } as CleanUpCartAction

    expect(cleanUpCart()).toEqual(expectedAction)
  })
})
