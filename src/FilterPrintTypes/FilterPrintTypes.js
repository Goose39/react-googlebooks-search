import React from 'react';
import './FilterPrintTypes.css';

export default function FilterBookTypes(props) {
    return (
      <div className="print_types_filter">
        <label>Print Type Filter
          <select type="select" onChange={e => props.printTypeSelection(e.target.value)}>
            <option>All</option>
            <option>Books</option>
            <option>Magazines</option>
          </select>
        </label>
      </div>  
    )
  }