import React from 'react';

function CustSearchBar() {
  return (
    <div className='header'>
    <h1 className='icon'>localBOOGS</h1>
    <span className='searchnbutt'>
    <span className='searchie'>
    <input name='searchField' id='searchField' type='search' />
    <img src='search.png' height='30px' alt='' />
    </span>
    <span className='butts'>
    <button><h5>Filter By Title</h5></button>
    <button><h5>Filter By Author</h5></button>
    </span>
    </span>
    </div>
  );
}

export default CustSearchBar;
