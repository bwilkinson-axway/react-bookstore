import React from 'react';
import './App.css';

function ShoppingCartCard(props) {
  return (
    <div className="cardTwo">
      <h3>{props.boog.title}</h3>
      <h3>${props.boog.price}.00</h3>
    </div>
  );
}

export default ShoppingCartCard;
