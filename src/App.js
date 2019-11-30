import React from 'react';
import './App.css';
import FilterBar from './FilterBar/FilterBar';
import SearchBar from './SearchBar/SearchBar';
import BookList from './BookList/BookList'



class App extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      printType: 'All',
      filter: 'No Filter', 
      searchTerm: ''
    };
  }
    
  handleSearch(e, url) {
    e.preventDefault();

    fetch(url)
      .then(res => {
        if(!res.ok) {
          throw new Error('Something went wrong, please try again later.');
        }
        return res;
      })
      .then(res => res.json())
      .then(data => {
        this.setState({
          books: data.items,
          error: null
        });
        console.log(this.state.books);
      })
      .catch(err => {
        this.setState({
          error: err.message
        });
        console.log(err)
      });
  }

  handleBookTypeSelection(type) {
    this.setState({
      filter: type
    })
  }

  handlePrintTypeSelection(type) {
    this.setState({
      printType: type
    })
  }

  handleSearchTermUpdate(term) {
    this.setState({
      searchTerm: term
    })
  }
  
  render () {
    
    return (
      <div className="App">
        <header className="App-header">
          <h1>Google Book Search</h1>
        </header>
        <SearchBar handleTermUpdate={(term) => this.handleSearchTermUpdate(term)} handleSearch={(e, url) => this.handleSearch(e, url)} term={this.state.searchTerm} printType={this.state.printType} filter={this.state.filter}/>
        <FilterBar bookType={this.state.bookType} printType={this.state.printType} printTypeSelection={(type) => this.handlePrintTypeSelection(type)} bookTypeSelection={(type) => this.handleBookTypeSelection(type)}/>
        <BookList books={this.state.books}/>
      </div>
    );
    }
}

export default App;
