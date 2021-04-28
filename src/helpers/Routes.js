import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import Home from '../views/Home';
import Author from '../views/Authors';
import AddAuthor from '../views/AddStudent';

export default function Routes({ authors, setAuthors }) {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route
          path='/authors'
          component={() => <Author authors={authors} setAuthors={setAuthors} />}
        />
        <Route
          path='/add-author'
          component={() => <AddAuthor setAuthors={setAuthors} />}
        />
      </Switch>
    </div>
  );
}

Routes.propTypes = {
  authors: PropTypes.array.isRequired,
  setAuthors: PropTypes.func.isRequired
};
