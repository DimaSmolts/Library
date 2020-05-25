import React from 'react';
import { Book } from '../../helpers/BookModel'
import './index.css'

const starSolid = require('../../assets/images/star-solid.svg');
const starOutline = require('../../assets/images/star-outline.svg');

interface BookDetailsProps {
  book: Book,
}

export default class BookDetails extends React.Component<BookDetailsProps> {
  render() {
    return <div className='book-detail-container'>
      <div className='book-detail-image'>
        <img src={this.props.book.image} />
      </div>
      <div className='book-detail-rate'>
        {
          (() => {
            let stars = Array<JSX.Element>();
            for (let i = 0; i < 10; i++) {
              if (i < this.props.book.rate) {
                stars.push(<img src={starSolid} />);
              } else {
                stars.push(<img src={starOutline} />);
              }
            }
            return stars;
          })()
        }
      </div>
      <h3 className='book-detail-author'>
        {this.props.book.author}
      </h3>
      <h2 className='book-detail-name'>
        {this.props.book.name}
      </h2>
      <div className='book-detail-genres'>
        {
          this.props.book
            .genres.map(genre => {
              return <span className='book-detail-genre'>{genre}</span>
            })
        }
      </div>
      <div className='book-detail-description'>
        {this.props.book.description}
      </div>
      <div className='book-detail-purchase'>
        <span className='book-detail-price'>{this.props.book.price}£</span>
        <button className='book-detail-purchase-button'>Add to cart</button>
      </div>
    </div>
  }
}
