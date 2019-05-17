import React from 'react';
import { compose } from 'recompose';
import SignOutButton from '../SignOut';
import { withAuthorization, withEmailVerification } from '../Session';

const HomePage = () => (
  <div>
    <h1>Home Page</h1>
    <p>The Home Page is accessible by every signed in user.</p>
    <SignOutButton />
  </div>
);

const condition = authUser => !!authUser;

export default compose(
  withEmailVerification,
  withAuthorization(condition),
)(HomePage);
