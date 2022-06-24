import React, { useState } from 'react';

// hooks
import { useAppDispatch } from '../store/hooks';

// store
import { getBooks } from '../store/async';

// ui
import { Form, Button } from 'react-bootstrap';


const categories: Array<string> = 
['all', 'art', 'biography', 'computers',
'history', 'medical', 'poetry'];

const SearchForm = () => {
  const [searchWords, setSearchWords] = useState('');
  const [category, setCategory] = useState(categories[0]);
  const [order, setOrder] = useState('relevance')
  const dispatch = useAppDispatch()

  const onSearchForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(getBooks(searchWords, category, order))
  }

  return (
    <Form className='header__form form container col-8' onSubmit={(e) => onSearchForm(e)}>
          <Form.Group className='col-12'>
            <Form.Control className='form__search-input' placeholder='Enter book title'
            onChange={(e) => setSearchWords(e.target.value)}
            />
          </Form.Group>

          <div className='row justify-content-between' style={{marginTop: '20px'}}>
            <Form.Group className='col-md-5' controlId='selectCategories'>
              <Form.Label>Categories</Form.Label>

              <Form.Select
                defaultValue={categories[0]}
                onChange={(e) => setCategory(e.target.value)}
              >
                {
                  categories.map((category, index) => {
                    return (
                      <option key={index}>{category}</option>
                    );
                  })
                }
              </Form.Select>
            </Form.Group>

            <Form.Group className='col-md-5' controlId='selectSorting'>
              <Form.Label>Sorting by</Form.Label>

              <Form.Select
                onChange={(e) => setOrder(e.target.value)}
              >
                <option defaultChecked>relevance</option>
                <option>newest</option>
              </Form.Select>
            </Form.Group>
          </div>
          

          <Button type='submit' variant='secondary' style={{marginTop: '20px'}}>Search</Button>
        </Form>
  );
};

export default SearchForm;