import React, { useEffect, useState } from 'react';
import './index.css';

export default function SearchGiphy() {
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('cool');
  const [result, setResult] = useState([]);

  let onSubmit = (e) => {
    e.preventDefault();
    setQuery(search);
    setSearch('');
  };

  useEffect(() => {
    async function fetchData() {
      try {
        const giphy_url = 'https://api.giphy.com/v1/gifs';
        const accessKey = process.env.REACT_APP_API_KEY;

        const response = await fetch(
          `${giphy_url}/search?api_key=${accessKey}&q=${query}&limit=30&offset=0&rating=g&lang=en`
        );

        const json = await response.json();
        setResult(
          json.data.map((item) => {
            return item.images.preview.mp4;
          })
        );
      } catch (error) {
        console.log(error);
      }
    }

    if (query !== '') {
      fetchData();
    }
  }, [query]);

  return (
    <>
      <form className='form' onSubmit={onSubmit}>
        <label className='label' htmlFor='query'>
          {' '}
          📷
        </label>
        <input
          type='text'
          className='input'
          placeholder={`Try "dog" or "apple"`}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button type='submit' className='button'>
          Search
        </button>
      </form>
      <div className='card-list'>
        {result.map((item, index) => (
          <div className='card' key={index}>
            <video
              autoPlay
              loop
              className='card--image'
              src={item}
              key={index}
              width='50%'
              height='50%'
            />
          </div>
        ))}
      </div>
    </>
  );
}
