import React from 'react';
import { Button } from 'semantic-ui-react'
import { withFirebase } from '../Firebase';

const SignOutButton = ({ firebase }) => (
   <Button primary  type="button" onClick={firebase.doSignOut} style={{'float':'right','marginTop':-70,'marginRight':50}}>Sign Out</Button>
);

export default withFirebase(SignOutButton);
