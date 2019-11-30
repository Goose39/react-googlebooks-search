import React from 'react';
import './FilterBookTypes.css';

export default function FilterBookTypes(props) {
    return (
      <div className="book_types_filter">
        <label>Book Type Filter
          <select type="select" onChange={e => props.bookTypeSelection(e.target.value)}>
            <option>No Filter</option>
            <option>full</option>
            <option>partial</option>
            <option>free-ebooks</option>
            <option>paid-ebooks</option>
            <option>ebooks</option>
          </select>
        </label>
      </div>  
    )
  }
