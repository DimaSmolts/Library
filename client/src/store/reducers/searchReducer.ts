import {
  SEARCH_BOOKS,
  SearchActions
} from "../actions/searchActions";

const initialSearchState = {
  query: '',
}

export type SearchState = typeof initialSearchState;

export function searchReducer(state: SearchState = initialSearchState, action: SearchActions): SearchState {
  switch (action.type) {
    case SEARCH_BOOKS:
      return {
        query: action.query,
      }
    default:
      return state;
  }
}
