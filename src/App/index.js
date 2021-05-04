import React, { useState, useEffect } from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import NavBar from '../components/NavBar';
import { getAuthors } from '../helpers/data/AuthorData';
import Routes from '../helpers/Routes';
import firebaseConfig from '../helpers/apiKeys';

firebase.initializeApp(firebaseConfig);

function App() {
  const [authors, setAuthors] = useState([]);

  const [user, setUser] = useState(null);

  useEffect(() => {
    getAuthors().then((response) => setAuthors(response));
  }, []);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((authed) => {
      if (authed) {
        // something to happen
        const userInfoObj = {
          fullName: authed.displayName,
          profileImage: authed.photoURL,
          uid: authed.uid,
          user: authed.email.split('@')[0]
        };
        setUser(userInfoObj);
      } else if (user || user === null) {
        setUser(false);
      }
    });
  }, []);

  return (
    <>
        <NavBar
          user={user}
        />
        <Routes
          authors={authors}
          setAuthors={setAuthors}
        />
    </>
  );
}

export default App;
