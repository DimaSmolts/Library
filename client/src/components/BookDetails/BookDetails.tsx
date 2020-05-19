import React from 'react';
import { Book } from '../../helpers/BookModel'
import './index.css'

interface BookDetailsProps {
  book: Book
}

export default class BookDetails extends React.Component<BookDetailsProps, {}> {
  render() {
    return <div className='book-detail-container'>
      <div className='book-detail-image'>
        <img src={this.props.book.image} />
      </div>
      <div className='book-detail-rate'>
        rate:{this.props.book.rate}
      </div>
      <h3 className='book-detail-author'>
        {this.props.book.author}
      </h3>
      <h2 className='book-detail-name'>
        {this.props.book.name}
      </h2>
      <div className='book-detail-price'>
        {this.props.book.price}
      </div>
      <div className='book-detail-description'>
        {this.props.book.description}
      </div>
    </div>
  }
}
