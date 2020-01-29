import React, {Fragment, useState} from 'react';
import { Form, Button, Message } from 'semantic-ui-react';

import FormInput from '../components/FormInput';
import DebtTable from '../components/DebtTable';

import {creditCardDebt} from '../utils/creditCardDebt'

import './CreditCardDebt.css'

const CreditCardDebt = () => {
  const [form, setForm] = useState({
    outstandingBalance: 7000,
    minimumPayment: 3,
    apr: 12,
    period: 120
  })

  const [tableData, setTableData] = useState({})

  const [showTable, setShowTable] = useState(false)

  const onChange = event => {
    const {name, value} = event.target
    setForm({
      ...form, 
      [name]: parseFloat(value) || 0
    })
  }

  const onSubmit = () => {
    setTableData(
      creditCardDebt(
        form.outstandingBalance, 
        form.minimumPayment, 
        form.apr, 
        form.period
      )
    )
    setShowTable(true)
  }

  return (
    <Fragment>
      <Form onSubmit={onSubmit}>
        <Form.Group widths="equal">
          <FormInput
            fluid
            name="outstandingBalance" 
            label="OutStanding Balance"
            labelColor="red" 
            placeholder="Enter the OutStanding Balance on your Credit Card" 
            type="number" 
            icon="dollar sign" 
            iconPosition="left" 
            min="0" 
            onChange={onChange}
          />
          <FormInput
            fluid
            name="minimumPayment" 
            label="Minimum Payment"
            labelColor="red" 
            placeholder="Enter the Minimum amount that your credit card issuer requires you to pay" 
            type="number" 
            icon="percent"  
            min="0" 
            onChange={onChange}
          />
          <FormInput
            fluid
            name="apr" 
            label="APR"
            labelColor="red" 
            placeholder="Enter the interest rate on your credit card (APR)" 
            type="number" 
            icon="percent"  
            min="0" 
            onChange={onChange}
          />
          <FormInput
            fluid
            name="period" 
            label="Period of Months"
            labelColor="blue" 
            placeholder="Enter the desired number of months you want to pay off the balance" 
            type="number" 
            min="0" 
            onChange={onChange}
          />
        </Form.Group>
        <Button.Group fluid>
          <Button type="submit" positive>Submit</Button>
        </Button.Group>
      </Form>
      {showTable ? (
        <Fragment>
          <Message 
            warning
            compact
            header={`At the end of ${form.period / 12} years, you will have $${(tableData[tableData.length - 1].balance).toFixed(2)} left to pay off`} />
          <DebtTable tableData={tableData}/> 
        </Fragment>
      )
        : null
      }
    </Fragment>
  )
}

export default CreditCardDebt