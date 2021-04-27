import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { addAuthor } from '../helpers/data/AuthorData';

const AuthorForm = ({ formTitle, setAuthors }) => {
  const [author, setAuthor] = useState(
    {
      email: '',
      // favorite: false,
      firebaseKey: '',
      first_name: '',
      last_name: ''
    }
  );

  const handleInputChange = (e) => {
    setAuthor((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addAuthor(author).then((authorsArray) => setAuthors(authorsArray));
  };

  return (
    <>
      <div className='author-form'>
        <form
          id='addAuthorForm'
          autoComplete='off'
          onSubmit={handleSubmit}
        >
         <h2>{formTitle}</h2>
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
          {/* <label>Favorite:</label>
          <input
            name='favorite'
            type='checkbox'
            checked=''
            value={author.favorite && 'checked'}
            onChange={handleInputChange}>
          </input> */}
          <button
            type='submit'>
              Submit
          </button>
        </form>
      </div>
    </>
  );
};

AuthorForm.propTypes = {
  formTitle: PropTypes.string.isRequired,
  setAuthors: PropTypes.func
};

export default AuthorForm;
