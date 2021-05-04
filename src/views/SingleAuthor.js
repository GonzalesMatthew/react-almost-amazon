import React, { useState, useEffect } from 'react';
import {
  useParams
} from 'react-router-dom';
import { singleAuthor } from '../helpers/data/AuthorData';

export default function SingleAuthor() {
  const { firebaseKey } = useParams();

  const [author, setAuthor] = useState({});

  useEffect(() => {
    singleAuthor(firebaseKey)
      .then(setAuthor);
  }, []);

  return (
    <div>
      <h1>Single Author</h1>
      <h2>{author.first_name} {author.last_name}</h2>
      <h3>{author.email}</h3>
      <h3>Favorite: {author.favorite}</h3>
    </div>
  );
}
