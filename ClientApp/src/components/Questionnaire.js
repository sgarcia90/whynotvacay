import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

export class Questionnaire extends Component {
  static displayName = Questionnaire.name;

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>Can we get to know you a little better?</h1>
            <Form>
                <FormGroup>
                    <Label for="clientList">Names/Ages of all who are on this vaction:</Label>
                    <Input type="text" name="clientList" id="clientList" />
                    <Input type="text" name="clientList" id="clientList" />
                    <Input type="text" name="clientList" id="clientList" />
                    <Input type="text" name="clientList" id="clientList" />
                </FormGroup>
            </Form>
      </div>
    );
  }
}
