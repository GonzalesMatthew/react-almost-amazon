import firebase from 'firebase';
import React, { useEffect, useState } from 'react';
import firebaseConfig from '../helpers/apiKeys';
import { getAuthors } from '../helpers/data/AuthorData';
import AuthorForm from '../components/AuthorForm';
import AuthorCard from '../components/AuthorCard';
import './App.scss';

firebase.initializeApp(firebaseConfig);

function App() {
  const [authors, setAuthors] = useState([]);

  useEffect(() => {
    getAuthors().then((response) => setAuthors(response));
  }, []);

  return (
    <div className='App'>
      <AuthorForm
        formTitle='Author Form'
        setAuthors={setAuthors}/>
      <hr/>
      {authors.map((authorInfo) => (
       <AuthorCard
          key={authorInfo.firebaseKey}
          firebaseKey={authorInfo.firebaseKey}
          firstName={authorInfo.first_name}
          lastName={authorInfo.last_name}
          // favorite={authorInfo.favorite}
          setAuthors={setAuthors}
          email={authorInfo.email}
        />
      ))}
    </div>
  );
}

export default App;
