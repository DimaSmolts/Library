import React from 'react'
import SearchPanel from './SearchPanel'
import { getBooksThunk, cleanUpThunk } from '../../store/thunks/bookListThunks'
import { connect, ConnectedProps } from 'react-redux'
import { History } from 'history'

interface SearchPanelState {
  query: string,
}

export interface SearchPanelProps {
  queryParams: string,
  history: History,
}

export class SearchPanelContainer extends React.Component<PropsFromRedux & SearchPanelProps, SearchPanelState> {
  constructor(props: PropsFromRedux & SearchPanelProps) {
    super(props)
    const searchQuery = new URLSearchParams(this.props.queryParams).get('search') || ''
    this.state = { query: searchQuery }
    this.handleQueryChange = this.handleQueryChange.bind(this)
    this.handleQuerySubmit = this.handleQuerySubmit.bind(this)
  }

  componentDidMount() {
    this.props.refreshBooks(this.state.query)
  }

  componentWillUnmount() {
    this.props.cleanUpBooks()
  }

  handleQueryChange(event: React.FormEvent<HTMLInputElement>) {
    this.setState({ query: event.currentTarget.value })
  }

  handleQuerySubmit(event: React.FormEvent<HTMLInputElement>) {
    event.preventDefault()
    this.props.refreshBooks(this.state.query)
    this.props.history.push({
      pathname: '/books',
      search: `?search=${this.state.query}`,
    })
  }

  render() {
    return <SearchPanel query={this.state.query}
      handleQueryChange={this.handleQueryChange}
      handleQuerySubmit={this.handleQuerySubmit} />
  }
}

const mapDispatch = {
  refreshBooks: (query: string) => getBooksThunk(query),
  cleanUpBooks: () => cleanUpThunk(),
}

const connector = connect(null, mapDispatch)
type PropsFromRedux = ConnectedProps<typeof connector>

export default connector(SearchPanelContainer)
