import React, { useState } from 'react';
import addAuthor from './helpers/data/AuthorData';

export default function AuthorForm() {
  const [author, setAuthor] = useState({
    email: '',
    favorite: false,
    firebaseKey: '',
    first_name: '',
    last_name: ''
  });

  const handleInputChange = (e) => {
    setAuthor((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addAuthor(author);
  };

  return (
    <>
      <div className='author-form'>
        <form
          id='addAuthorForm'
          autoComplete='off'
          onSubmit={handleSubmit}
        >
         <h2>Author Form</h2>
          <label>Email:</label>
          <input
            name='email'
            type='email'
            placeholder='Email'
            value={author.email}
            onChange={handleInputChange}>
          </input>
          <label>First Name:</label>
          <input
            name='first_name'
            type='text'
            placeholder='First Name'
            value={author.first_name}
            onChange={handleInputChange}>
          </input>
          <label>Last Name:</label>
          <input
            name='last_name'
            type='text'
            placeholder='Last Name'
            value={author.last_name}
            onChange={handleInputChange}>
          </input>
          <label>Favorite:</label>
          <input
            name='favorite'
            type='checkbox'
            placeholder='false'
            value={author.favorite}
            onChange={handleInputChange}>
          </input>
          <button
            type='submit'>
              Submit
          </button>
        </form>
      </div>
    </>
  );
}
