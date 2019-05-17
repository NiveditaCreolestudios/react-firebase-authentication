import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { withFirebase } from '../Firebase';
import * as ROUTES from '../../constants/routes';
import { Button, Form, Input, Card } from 'semantic-ui-react'

const PasswordForgetPage = () => (
  <div>
    <PasswordForgetForm />
    <p style={{'textAlign': 'center'}}>
     Sign In? <Link to={ROUTES.SIGN_IN}>Sign In</Link>
    </p>
  </div>
);

const INITIAL_STATE = {
  email: '',
  error: null,
};

class PasswordForgetFormBase extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = event => {
    const { email } = this.state;

    this.props.firebase
      .doPasswordReset(email)
      .then(() => {
        this.setState({ ...INITIAL_STATE });
      })
      .catch(error => {
        this.setState({ error });
      });

    event.preventDefault();
  };

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const { email, error } = this.state;

    const isInvalid = email === '';

    return (
    <Card className="ui centered card">
    <Card.Content>
      <Card.Header>Forgot Password</Card.Header>
    </Card.Content>
    <Card.Content>
    <Form onSubmit={this.onSubmit}>
    <Form.Field>
      <label>Email</label>
    <input
          name="email"
          value={this.state.email}
          onChange={this.onChange}
          type="text"
          placeholder="Email Address"
        />
    </Form.Field>
    <Button type='submit' disabled={isInvalid}>Reset My Password</Button>
    {error && <p>{error.message}</p>}
    </Form>
    </Card.Content>
    </Card>
    );
  }
}

const PasswordForgetLink = () => (
  <p style={{'textAlign': 'center'}}>
    <Link to={ROUTES.PASSWORD_FORGET}>Forgot Password?</Link>
  </p>
);

export default PasswordForgetPage;

const PasswordForgetForm = withFirebase(PasswordForgetFormBase);

export { PasswordForgetForm, PasswordForgetLink };
