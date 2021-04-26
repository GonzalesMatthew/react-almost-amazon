import React from 'react';
import {
  Button,
  Card,
  CardText,
  CardTitle
} from 'reactstrap';
import PropTypes from 'prop-types';

const AuthorCard = ({
  firstName,
  lastName,
  favorite,
  handleClick
}) => {
  <Card body>
    <CardTitle tag="h5">{firstName} {lastName}</CardTitle>
    <CardText>Favorite: {favorite}</CardText>
    {handleClick ? <Button onClick={handleClick}>Print Name</Button> : ''}
  </Card>;
};

AuthorCard.propTypes = {
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  favorite: PropTypes.bool,
  handleClick: PropTypes.func
};

export default AuthorCard;
