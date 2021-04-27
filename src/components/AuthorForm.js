import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { addAuthor, updateAuthor } from '../helpers/data/AuthorData';

const AuthorForm = (
  {
    formTitle,
    setAuthors,
    firstName,
    lastName,
    email,
    firebaseKey
  }
) => {
  const [author, setAuthor] = useState(
    {
      email: email || '',
      // favorite: false,
      firebaseKey: firebaseKey || null,
      first_name: firstName || '',
      last_name: lastName || ''
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
    if (author.firebaseKey) {
      console.warn('We are updating');
      console.warn(author.firebaseKey);
      updateAuthor(author).then((authorsArray) => setAuthors(authorsArray));
    } else {
      console.warn('We are adding');
      console.warn(author.firebaseKey);
      addAuthor(author).then((authorsArray) => setAuthors(authorsArray));
    }
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
  setAuthors: PropTypes.func,
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  email: PropTypes.string,
  firebaseKey: PropTypes.string
};

export default AuthorForm;
