import React, { useState, useEffect } from 'react';
import NavBar from '../components/NavBar';
import { getAuthors } from '../helpers/data/AuthorData';
import Routes from '../helpers/Routes';

function App() {
  const [authors, setAuthors] = useState([]);

  useEffect(() => {
    getAuthors().then((response) => setAuthors(response));
  }, []);

  return (
    <>
        <NavBar />
        <Routes
          authors={authors}
          setAuthors={setAuthors}
        />
    </>
  );
}

export default App;
