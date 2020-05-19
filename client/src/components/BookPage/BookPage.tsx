import React from 'react';
import BookDetailsContainer from '../BookDetails/BookDetailsContainer';

export interface BookNavParams {
  bookId: string;
}

export default class BookPage extends React.Component<BookNavParams> {
  render() {
    return <>
      <BookDetailsContainer bookId={this.props.bookId} />
    </>
  }
}
