import React from 'react';
import {
  Button,
  Card,
  CardText,
  CardTitle
} from 'reactstrap';
import PropTypes from 'prop-types';
import { deleteAuthor } from '../helpers/data/AuthorData';

const AuthorCard = (
  {
    firebaseKey,
    firstName,
    lastName,
    // favorite,
    setAuthors
  }
) => {
  const handleClick = () => {
    deleteAuthor(firebaseKey)
      .then((authorsArray) => setAuthors(authorsArray));
  };

  return (
    <Card body>
      <CardTitle tag="h5">{firstName} {lastName}</CardTitle>
      <CardText>Favorite:
        {/* {favorite} */}
      </CardText>
      {<Button color="danger" onClick={handleClick}>Delete Author</Button>}
    </Card>
  );
};

AuthorCard.propTypes = {
  firebaseKey: PropTypes.string.isRequired,
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  // favorite: PropTypes.bool,
  handleClick: PropTypes.func,
  setAuthors: PropTypes.func
};

export default AuthorCard;
