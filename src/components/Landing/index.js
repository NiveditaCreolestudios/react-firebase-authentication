import React from 'react';
import { Link } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';

const Landing = () => (
  <div style={{'textAlign': 'center'}}>
    <h1>Welcome to React-Firebase Authentication Demo</h1>
    <p>
     Go to Sign In? <Link to={ROUTES.SIGN_IN}>Sign In</Link>
    </p>
  </div>
);

export default Landing;
