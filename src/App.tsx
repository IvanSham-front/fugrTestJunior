import React from 'react';
import { Route, Routes } from 'react-router-dom';

// components
import Header from './components/Header';
import BooksList from './pages/BooksList/BooksList';
import SelectedBook from './pages/SelectedBook/SelectedBook';


// styles
import 'bootstrap/scss/bootstrap.scss';
import './assets/styles/styles.scss'


function App() {
  return (
    <div className="App">
      <div className="background"></div>
        <Header />

        <Routes>
          <Route path='/' element={<BooksList/>}/>
          <Route path='/selectedBook/:id' element={<SelectedBook/>}/>
        </Routes>
    </div>
  );
}

export default App;
