import React from 'react';
import './SearchBar.css';

export default function SearchBar(props) {
  let url = `https://www.googleapis.com/books/v1/volumes?key=AIzaSyAbR9quJHgj1NtLh-ohpWtFPOOhleHWRKE&q=${props.term}&printType=${props.printType}`;

if (props.filter !== 'No Filter') {
  url += `&filter=${props.filter}`;
}

  return (
    <div className="search_bar">
      <form onSubmit={e => props.handleSearch(e, url)}>
        <input type='text' placeholder='Book Title' value={props.term} onChange={e => props.handleTermUpdate(e.target.value)} required></input>
        <input type='submit' value='Search'></input>
      </form>
    </div>
  )
}