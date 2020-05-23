import axios from 'axios';
import { Book } from './BookModel'

const baseURL = process.env.REACT_APP_API_URL || 'http://localhost:3000';

const instance = axios.create({
  baseURL: baseURL + '/api',
})

export const bookAPI = {
  async getBooks() {
    return await instance.get<Array<Book>>('/books');
  },
  async getBook(id: number) {
    return await instance.get<Book>('/books/' + id);
  }
}
