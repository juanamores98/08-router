import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import queryString from 'query-string';
import { Characters } from '../models/Characters';
import Card from '../components/Card';

const SearchScreen = ({ history }) => {
  const location = useLocation();

  const { q = '' } = queryString.parse(location.search);

  const [inputValue, setInputValue] = useState(q);

  const [characters, setCharacters] = useState([]);

  const handleChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    history.push(`?q=${inputValue}`);
  };

  const getCharacters = () => {
    if (inputValue.trim() !== '') {
      const value = Characters.filter((character) =>
        character.name.toLowerCase().includes(inputValue.toLowerCase())
      );
      setCharacters(value);
    } else {
      setCharacters([]);
    }
  };

  useEffect(() => {
    getCharacters();
  }, [q]);

  return (
    <div className='container mt-3 '>
      <h1>Search Screen</h1>
      <hr />
      <div className='row'>
        <div className='col-6'>
          <h2>Search</h2>
          <form onSubmit={handleSubmit}>
            <div className='mb-3'>
              <label className='form-label'>Character</label>
              <input
                type='text'
                className='form-control'
                id='exampleInput'
                placeholder='Character Name'
                autoComplete='off'
                value={inputValue}
                onChange={handleChange}
              />
            </div>

            <button type='submit' className='btn btn-primary w-100'>
              Search
            </button>
          </form>
        </div>
        <div className='col-6'>
          <h2>Results {characters.length}</h2>
          {characters.length === 0 && (
            <div className='alert alert-warning'>
              There is no a character with {inputValue}
            </div>
          )}
          {
            <div className='row'>
              {characters.map((character) => {
                return <Card key={character.id} {...character} />;
              })}
            </div>
          }
        </div>
      </div>
    </div>
  );
};

export default SearchScreen;
