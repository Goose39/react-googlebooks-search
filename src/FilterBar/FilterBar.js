import React from 'react';
import './FilterBar.css';
import PrintTypeFilter from '../FilterPrintTypes/FilterPrintTypes';
import BookTypeFilter from '../FilterBookTypes/FilterBookTypes';

class FilterBar extends React.Component {
  render() {
    return (
      <div className="filter_bar">
        <PrintTypeFilter types={this.props.printTypes} printTypeSelection={this.props.printTypeSelection}  />
        <BookTypeFilter types={this.props.bookTypes} bookTypeSelection={this.props.bookTypeSelection}/>
      </div>  
    )
  }
}

export default FilterBar;