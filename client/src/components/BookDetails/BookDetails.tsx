import React from 'react'
import { Book } from '../../helpers/BookModel'
import './index.css'

const starSolid = require('../../assets/images/star-solid.svg')
const starOutline = require('../../assets/images/star-outline.svg')

interface BookDetailsProps {
  book: Book,
  quantityOfAddedItems: number,
  addBookToCart: (book: Book) => void,
  removeBookFromCart: (book: Book) => void,
}

const BookDetails: React.SFC<BookDetailsProps> = (props: BookDetailsProps) => {
  return <div className='book-detail-container'>
    <div className='book-detail-image'>
      <img src={props.book.image} />
    </div>
    <div className='book-detail-rate'>
      {
        (() => {
          let stars = Array<JSX.Element>()
          for (let i = 0; i < 10; i++) {
            if (i < props.book.rate) {
              stars.push(<img src={starSolid} />)
            } else {
              stars.push(<img src={starOutline} />)
            }
          }
          return stars
        })()
      }
    </div>
    <h3 className='book-detail-author'>
      {props.book.author}
    </h3>
    <h2 className='book-detail-name'>
      {props.book.name}
    </h2>
    <div className='book-detail-genres'>
      {
        props.book.genres
          .map(genre => {
            return <span className='book-detail-genre'>{genre}</span>
          })
      }
    </div>
    <div className='book-detail-description'>
      {props.book.description}
    </div>
    <div className='book-detail-purchase'>
      <span className='book-detail-price'>{props.book.price}£</span>
      <span>In cart: {props.quantityOfAddedItems}</span>
      <button
        onClick={() => props.addBookToCart(props.book)}
        className='book-detail-purchase-button'>add</button>
      <button
        onClick={() => props.removeBookFromCart(props.book)}
        disabled={props.quantityOfAddedItems === 0 ? true : false}
        className='book-detail-purchase-button'>remove</button>
    </div>
  </div>
}

export default BookDetails
