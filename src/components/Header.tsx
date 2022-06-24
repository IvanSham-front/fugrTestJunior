import React from 'react';
import SearchForm from './SearchForm';

const Header = () => {
  return (
    <header className='header d-flex flex-column'>
        <h1 className='header__title title text-center'>Search for books</h1>

        <SearchForm/>
    </header>
  );
};

export default Header;