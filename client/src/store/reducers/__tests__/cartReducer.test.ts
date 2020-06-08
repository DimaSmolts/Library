import { Book } from '../../../helpers/BookModel'
import {
  cartReducer,
  initialCartState,
  CartState,
} from '../cartReducer'
import {
  addBookToCart,
  removeBookFromCart,
  cleanUpCart,
  CartActions,
} from '../../actions/cartActions'

const firstBook = { id: 1 } as Book
const secondBook = { id: 2 } as Book
const thirdBook = { id: 3 } as Book

const state = {
  bookRecords: [
    { quantity: 1, book: firstBook },
    { quantity: 1, book: secondBook },
  ]
} as CartState

describe('cartReducer', () => {
  it('should return the initial state', () => {
    expect(cartReducer(undefined, {} as CartActions)).toEqual(initialCartState)
  })
  it('should increment quantity', () => {
    expect(cartReducer(state, addBookToCart(firstBook)).bookRecords[0].quantity).toEqual(2)
  })
  it('should decrement quantity', () => {
    expect(cartReducer(state, removeBookFromCart(firstBook)).bookRecords[0].quantity).toEqual(1)
  })
  it('should create book record', () => {
    expect(cartReducer(state, addBookToCart(thirdBook)).bookRecords.length).toEqual(3)
  })
  it('should remove book record', () => {
    expect(cartReducer(state, removeBookFromCart(secondBook)).bookRecords.length).toEqual(1)
  })
  it('should clean up book records', () => {
    expect(cartReducer(state, cleanUpCart())).toEqual(initialCartState)
  })
})
