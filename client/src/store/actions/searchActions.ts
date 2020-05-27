// constants
export const SEARCH_BOOKS = 'SEARCH_BOOKS';

// actions
type SeacrhingBookAction = {
  type: typeof SEARCH_BOOKS,
  query: string,
}

// actionCreators
export const searchBooks = (query: string) => {
  return {
    type: SEARCH_BOOKS,
    query: query,
  };
}

export type SearchActions = SeacrhingBookAction;
