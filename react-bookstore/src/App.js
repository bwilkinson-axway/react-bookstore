import React from 'react';
import './App.css';
import CustSearchBar from './CustSearchBar';
import CustBookContainer from './CustBookContainer';
import ShoppingCart from './ShoppingCart';

class App extends React.Component {
  state = {
    books: []
  }

  // const handleAddClick = () => {
  //   this.state.books.inCart = true
  // }

  componentDidMount = async () => {
      try {
        const res = await fetch('http://localhost:8082/api/books')
        if (!res.ok) throw new Error()
        const json = await res.json()
        this.setState({
          books: json
        })
      } catch (e) {
        alert(e)
      }
  }

  render () {
    return (
      <div className="App">
        <header className="App-header">
          <CustSearchBar />
        </header>
        <div className='body'>
        <CustBookContainer books={this.state.books} onClick={this.handleAddClick} />
        <ShoppingCart books={this.state.books} />
        </div>
      </div>
    );
  }
}

export default App;
