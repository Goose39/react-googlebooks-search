import React from 'react';
import './BookItem.css';

export default function BookItem(props) {
  return  (
    <li className="book_row">
      <div className="book_img">
        <a href={props.link} target="_blank">
          <img className="thumbnail" src={props.imageUrl} alt={props.title} />
        </a>
      </div>
      <div className="book_details">
        <h2 className="title">{props.title}</h2>
        <h3 className="author">{props.author}</h3>
        <h3 className="price">{props.price}</h3>
        <p className="desc">{props.summary}</p>
      </div>
    </li>
  )
  }