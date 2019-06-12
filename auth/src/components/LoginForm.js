import React, { Component } from 'react';
import { Button, Card, CardSection, Input } from './common';

class LoginForm extends Component {
  state = { email: '', password: '' };
  render() {
    return (
      <Card>
        <CardSection>
          <Input
            autoCorrect={false}
            label='Email'
            placeholder='youremail@domain.com'
            value={this.state.email}
            onChangeText={email => this.setState({ email })}
          />
        </CardSection>
        <CardSection>
          <Input
            secureTextEntry
            autoCorrect={false}
            label='Password'
            placeholder='password'
            value={this.state.password}
            onChangeText={password => this.setState({ password })}
          />
        </CardSection>
        <CardSection>
          <Button>{'Log In'}</Button>
        </CardSection>
      </Card>
    );
  }
}

export default LoginForm;
