import React, { useState } from 'react';
import {
  Button,
  Card,
  CardText,
  CardTitle
} from 'reactstrap';
import PropTypes from 'prop-types';
import { deleteAuthor } from '../helpers/data/AuthorData';
import AuthorForm from './AuthorForm';

const AuthorCard = (
  {
    firebaseKey,
    firstName,
    lastName,
    // favorite,
    setAuthors,
    email
  }
) => {
  const [editing, setEditing] = useState(false);

  const handleClick = (type) => {
    switch (type) {
      case 'delete':
        deleteAuthor(firebaseKey)
          .then((authorsArray) => setAuthors(authorsArray));
        break;
      case 'edit':
        setEditing((prevState) => !prevState);
        break;
      default:
        console.warn('nothing selected');
    }
  };

  return (
    <Card body>
      <CardTitle tag="h5">{firstName} {lastName}</CardTitle>
      <CardText>Favorite:
        {/* {favorite} */}
      </CardText>
      <Button color="danger" onClick={() => handleClick('delete')}>Delete Author</Button>
      <Button color="info" onClick={() => handleClick('edit')}>
        {editing ? 'Close Form' : 'Edit Author'}
      </Button>
      {
        editing && <AuthorForm
          formTitle='Edit Author'
          setAuthors={setAuthors}
          firebaseKey={firebaseKey}
          firstName={firstName}
          lastName={lastName}
          email={email}
        />
      }
    </Card>
  );
};

AuthorCard.propTypes = {
  firebaseKey: PropTypes.string.isRequired,
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  // favorite: PropTypes.bool,
  handleClick: PropTypes.func,
  setAuthors: PropTypes.func,
  email: PropTypes.string.isRequired,
};

export default AuthorCard;
