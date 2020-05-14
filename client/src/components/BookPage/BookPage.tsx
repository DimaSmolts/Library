import React from 'react';

interface BookNavParams {
  bookId: string;
}

export default class BookPage extends React.Component<BookNavParams> {
  render() {
    return <h1>Book #{this.props.bookId}</h1>
  }
}
