import React from 'react'
import './index.css'
import { Book } from '../../helpers/BookModel'
import { BookCartRecord } from '../../store/reducers/cartReducer'

interface PurchaseCompletionProps {
  bookCartRecords: Array<BookCartRecord>,
  handlePurchaseCompletion: (event: React.FormEvent<EventTarget>) => void,
  addBookToCart: (book: Book) => void,
  removeBookFromCart: (book: Book) => void,
}

const PurchaseCompletion: React.SFC<PurchaseCompletionProps> = (props: PurchaseCompletionProps) => {
  return <div className='purchase-completion'>
    <span className='purchase-column-title'>Book</span>
    <span className='purchase-column-title'>Price</span>
    <span className='purchase-column-title'>Count</span>
    <span className='purchase-column-title'>Sum</span>
    {
      props.bookCartRecords
        .map((br, index) => {
          return <>
            <h2>{index + 1}. {br.book.name}</h2>
            <span>{br.book.price}£</span>
            <span>x{br.quantity}</span>
            <span>{br.quantity * br.book.price}£</span>
          </>
        })
    }
    <div className='total-line'></div>
    <h2 className='total'> Total </h2>
    <span className='final-price'>
      {
        props.bookCartRecords
          .map(br => br.quantity * br.book.price)
          .reduce((total, current) => {
            return total + current;
          })
      }£
      </span>
    <button
      className='submit-purchase'
      onClick={props.handlePurchaseCompletion}>
      Submit</button>
  </div>
}


export default PurchaseCompletion
