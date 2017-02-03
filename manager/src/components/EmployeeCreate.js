import React, { Component } from 'react';
import { Card, CardSection, Input, Button } from './common';

class EmployeeCreate extends Component {
  render() {
    return (
      <Card>
        <CardSection>
          <Input
            label="Name"
            placehodler="John"
          />
        </CardSection>

        <CardSection>
          <Input
            label="Phone"
            placehodler="555-555-5555"
          />
        </CardSection>

        <CardSection />
        
        <CardSection>
          <Button>
            Save
          </Button>
        </CardSection>
      </Card>
    );
  }
}

export default EmployeeCreate;
