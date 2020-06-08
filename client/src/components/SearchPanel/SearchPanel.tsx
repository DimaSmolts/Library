import React from 'react'
import './index.css'

interface SearchPanelProps {
  query: string,
  handleQueryChange: (event: React.FormEvent<EventTarget>) => void,
  handleQuerySubmit: (event: React.FormEvent<EventTarget>) => void,
}

const SearchPanel: React.SFC<SearchPanelProps> = (props: SearchPanelProps) => {
  return <div className='search-panel' >
    <h2>Find a book!</h2>
    <form className='search-panel-form' onSubmit={props.handleQuerySubmit.bind(this)}>
      <span>I am looking for:</span>
      <input className='search-panel-input'
        spellCheck='false'
        type='text'
        placeholder='search...'
        value={props.query}
        onChange={props.handleQueryChange.bind(this)} />
      <input className='search-panel-submit'
        type='submit'
        value='Go!' />
    </form>
  </div>
}

export default SearchPanel
