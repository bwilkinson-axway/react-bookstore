import React from 'react';
import './App.css';
import CustBookCard from './CustBookCard';

function CustBookContainer(props) {
  return (
    <div className="boogs">
    {props.books.map(book => {
      return (
        <CustBookCard key={book.id} boog={book} onClick={props.onClick} />
      )
    })}
    </div>
  );
}

export default CustBookContainer;
