import React from 'react';
import './App.css';
import ShoppingCartCard from './ShoppingCartCard';

function ShoppingCart(props) {
  return (
    <div className="cart">
    <h1>Cart:</h1>
    <ul>
    {props.books.map(book => {
      return (
        <ShoppingCartCard key={book.id} boog={book} />
      )
    })}
    </ul>
    <hr />
    <h3> Total: $100 </h3>
    </div>
  );
}

export default ShoppingCart;
