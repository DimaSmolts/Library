import { searchBooks } from '../actions/searchActions';
import { Dispatch } from 'redux';

export const searchBookThunk = (query: string) => {
  return (dispatch: Dispatch) => {
    dispatch(searchBooks(query));
  }
}
