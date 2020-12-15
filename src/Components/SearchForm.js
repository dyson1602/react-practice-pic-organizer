import React from 'react'

function SearchForm(props) {

  return (
    <>
      <h5>Search Form</h5>
      <div class="row">
        <form class="col s12 push-s3">
          <div class="row">
            <div class="input-field col s6">
            <input type="text" value={props.searchTerm} onChange={props.searchHandler} placeholder="search" />
            </div>
          </div>
        </form>
      </div>
    </>
  )
}

export default SearchForm