import React from 'react'
import { Book } from '../../helpers/BookModel'
import { Link } from 'react-router-dom'
import './index.css'

interface BookCardProps {
  book: Book,
}

const BookCard: React.SFC<BookCardProps> = (props: BookCardProps) => {
  return <Link to={'/books/' + props.book.id} className='book-card-link' >
    <div className='book-card'>
      <img src={props.book.image} />
      <span className='book-card-author'>{props.book.author}</span>
      <h3>{props.book.name}</h3>
    </div>
  </Link>
}

export default BookCard
