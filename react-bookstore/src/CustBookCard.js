import React from 'react';
import './App.css';

function CustBookCard(props) {
  const handleClick = () => {
    return props.onClick(props.boog.id)
  }
  return (
    <div className="card">
    <div className='oneLine'>
    <h2>{props.boog.title}</h2>
    </div>
    <div className='oneLine'>
    <h3>{props.boog.subtitle}</h3>
    <h4>By: {props.boog.author}</h4>
    </div>
    <p>{props.boog.description}</p>
    <div className='oneLine'>
    <h3>${props.boog.price}.00</h3>
    <p>Pages: {props.boog.pages}</p>
    <button onClick={handleClick}>Add to Cart!</button>
    </div>
    </div>
  );
}

export default CustBookCard;
