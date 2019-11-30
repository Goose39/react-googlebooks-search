import React from 'react';
import './BookList.css';
import BookItem from "../BookItem/BookItem";

class BookList extends React.Component {
  
  render() { 
    const books = this.props.books.map((book, idx) => 
        <BookItem 
          key={idx}
          title={book.volumeInfo.title} 
          author={book.volumeInfo.authors} 
          summary={book.volumeInfo.description} 
          imageUrl={book.volumeInfo.imageLinks.thumbnail? book.volumeInfo.imageLinks.thumbnail : "https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png"}
          link={book.volumeInfo.previewLink}
          price={book.saleInfo.retailPrice? `$${book.saleInfo.retailPrice.amount}` : "Not for Sale"}
        />  
    )

    return (
      <ul className="BookList">
        {books}
      </ul>
    );
  }
}

export default BookList;