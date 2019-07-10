import React from 'react';
import './App.css';
import ShoppingCartCard from './ShoppingCartCard';

class ShoppingCart extends React.Component {

  checkout = () => {
    alert('Give me all your money!! This is a stickup!')
  }

  render () {
    let tot = 0;
    for (var i = 0; i < this.props.books.length; i++) {
      tot += this.props.books[i].price
    }
    return (
    <div className="cart">
    <h1>Cart:</h1>
    <ul>
    {this.props.books.map(book => {
      return <ShoppingCartCard key={book.id} boog={book} />
    })}
    </ul>
    <hr />
    <h3> Total: ${tot}.00</h3>
    <button onClick={this.checkout}><h4>Checkout</h4></button>
    </div>
  )
  };
}

export default ShoppingCart;
