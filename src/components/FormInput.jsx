import React from 'react';
import { Form, Label, Input } from 'semantic-ui-react';

import './FormInput.css';

const FormInput = props => (
  <Form.Field>
    <Label color={props.labelColor}>
      {props.label}
    </Label>
    <Input 
      fluid={props.fluid}
      step={props.step || 0.01}
      name={props.name}
      placeholder={props.placeholder} 
      type={props.type} 
      icon={props.icon} 
      onChange={props.onChange}
      iconPosition={props.iconPosition} 
      min={props.min}
      value={props.value}
    />
  </Form.Field>
)

export default FormInput