import React from 'react';

class CustSearchBar extends React.Component {
  state = {
    searchie: ''
  }

  handleChange = e => {
    this.setState({
      searchie: e.target.value
    })
    setTimeout(() => {
      this.props.onChange(this.state.searchie)
    }, 20)
  }

  render () {
  return (
    <div className='header'>
    <h1 className='icon'>localBOOGS</h1>
    <span className='searchnbutt'>
    <span className='searchie'>
    <input onChange={this.handleChange} value={this.state.searchie} name='searchField' id='searchField' type='search' />
    <img src='search.png' height='30px' alt='' />
    </span>
    <span className='butts'>
    <button onClick={() => this.props.onfilt('title')} ><h5>Filter By Title</h5></button>
    <button onClick={() => this.props.onfilt('author')} ><h5>Filter By Author</h5></button>
    </span>
    </span>
    </div>
  )};
}



export default CustSearchBar;
