import React from 'react';
import './App.css';
import CustSearchBar from './CustSearchBar';
import CustBookContainer from './CustBookContainer';
import ShoppingCart from './ShoppingCart';

class App extends React.Component {
  state = {
    books: [],
    cart: [],
    filtered: [],
    filter: 'title'
  }

  filterBy = (str) => {
    this.setState(() => {
      return {
        filter: str
      }
    })
  }

  search = (string) => {
    if (this.state.filter === 'title') {
    this.setState(() => {
      return {
        filtered: this.state.books.filter(book => {
          let loud = book.title.toUpperCase()
          let loudString = string.toUpperCase()
          return loud.includes(loudString)
        })
      }
    })
  } else {
    this.setState(() => {
      return {
        filtered: this.state.books.filter(book => {
          let loud = book.author.toUpperCase()
          let loudString = string.toUpperCase()
          return loud.includes(loudString)
        })
      }
    })
  }
  }

  handleAddClick = (id) => {
    this.setState(prevState => {
      return {
        ...prevState,
        books: prevState.books.map(book => book.id === id ? {...book, inCart: true} : book),
        cart: prevState.cart.concat(prevState.books.find(book => book.id === id && book))
      }
    })
  }

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
          <CustSearchBar onChange={this.search} onfilt={this.filterBy} />
        </header>
        <div className='body'>
        <CustBookContainer books={this.state.filtered.length > 0 ? this.state.filtered : this.state.books} onClick={this.handleAddClick} />
        <ShoppingCart books={this.state.cart} total={this.state.total} />
        </div>
      </div>
    );
  }
}

export default App;
