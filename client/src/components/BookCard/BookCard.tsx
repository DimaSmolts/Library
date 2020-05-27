import React from 'react';
import { Book } from '../../helpers/BookModel';
import './index.css';
import { Link } from 'react-router-dom';

interface BookCardProps {
  book: Book,
}

export default class BookCard extends React.Component<BookCardProps> {
  render() {
    return <Link to={'/books/' + this.props.book.id} className='book-card-link' >
      <div className='book-card'>
        <img src={this.props.book.image} />
        <span className='book-card-author'>{this.props.book.author}</span>
        <h3>{this.props.book.name}</h3>
      </div>
    </Link>
  }
}
