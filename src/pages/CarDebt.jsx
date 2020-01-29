import React, {useState, Fragment} from 'react'
import {Form, Button, Message} from 'semantic-ui-react'

import FormInput from "../components/FormInput"
import DebtTable from '../components/DebtTable'

import {carDebt} from '../utils/carDebt'

import './CarDebt.css'

const CarDebt = () => {
  const [form, setForm] = useState({
    price: 19055,
    tax: 7,
    titleFees: 200,
    tradeIn: 3000,
    dealerCharges: 500,
    rebates: 1000,
    downPayment: 2000,
    interest: 7,
    months: 48
  })

  const [tableData, setTableData] = useState({})
  
  const [showTable, setShowTable] = useState(false)
  
  const onSubmit = () => {
    setTableData(carDebt(form))
    setShowTable(true)
  }

  const onChange = (event) => {
    const {name, value} = event.target;
    setForm({...form, [name]: parseFloat(value) || 0})
  } 

  const onFormReset = () => {
    setForm({
      price: 0,
      tax: 0,
      titleFees: 0,
      tradeIn: 0,
      dealerCharges: 0,
      rebates: 0,
      downPayment: 0,
      interest: 0,
      months: 0
    })

    setShowTable(false)
  }

  return (
    <Fragment>
      <Form onSubmit={onSubmit}>
        <Form.Group widths="equal">
          <FormInput
            fluid
            name="price" 
            label="Car Price"
            labelColor="red" 
            placeholder="Enter the Retail Price of your New Car" 
            type="number" 
            icon="dollar sign" 
            iconPosition="left" 
            min="0" 
            onChange={onChange}
          />
          <FormInput
            fluid 
            name="tax"
            label="Sales Tax"
            labelColor="red" 
            placeholder="Enter the Sales Tax (if any)" 
            type="number" 
            icon="percent" 
            min="0" 
            onChange={onChange}
          />
          <FormInput
            fluid 
            name="titleFees"
            label="Title Fees"
            labelColor="red" 
            placeholder="Enter the Title Fees (if any)" 
            type="number" 
            icon="dollar sign" 
            min="0" 
            iconPosition="left" 
            onChange={onChange}
          />
        </Form.Group>
        <Form.Group widths="equal">
          <FormInput
            fluid 
            name="tradeIn"
            label="Trade-In"
            labelColor="green" 
            placeholder="Enter the Trade In Value of your old car (if any)" 
            type="number" 
            icon="dollar sign" 
            min="0" 
            iconPosition="left" 
            onChange={onChange}
          />
          <FormInput
            fluid 
            name="dealerCharges"
            label="Dealer Charges"
            labelColor="red" 
            placeholder="Enter any charges from the dealer" 
            type="number" 
            icon="dollar sign" 
            min="0" 
            iconPosition="left" 
            onChange={onChange}
          />
          <FormInput
            fluid 
            name="rebates"
            label="Rebates or Incentives"
            labelColor="green" 
            placeholder="Enter any rebates or incentives that you may qualify for" 
            type="number" 
            icon="dollar sign" 
            min="0" 
            iconPosition="left" 
            onChange={onChange}
          />
        </Form.Group>
        <Form.Group widths="equal">
          <FormInput 
            fluid
            name="downPayment"
            label="Down Payment"
            labelColor="green" 
            placeholder="Enter the amount paid up front for the new car" 
            type="number" 
            icon="dollar sign" 
            min="0" 
            iconPosition="left" 
            onChange={onChange}
          />
          <FormInput 
            fluid
            name="interest"
            label="Interest Rate"
            labelColor="blue" 
            placeholder="Enter the Annual Interest Rate" 
            type="number" 
            icon="percent" 
            min="0" 
            onChange={onChange}
          />
          <FormInput
            fluid
            name="months"
            label="Number of Months" 
            labelColor="blue"
            placeholder="Enter the total number of months" 
            type="number"  
            min="0" 
            onChange={onChange}
          />
        </Form.Group>
        <Button.Group fluid>
          <Button type="reset" onClick={onFormReset} negative>Reset</Button>
          <Button.Or/>
          <Button type="submit" positive>Submit</Button>
        </Button.Group>
      </Form>
      {
        showTable && (
          <Fragment>
            <Message
              info
              compact
              header={`Your monthly payment will be $${tableData[1].payment}`}
              content={`You will have to pay off $${(tableData[0].balance)} in ${form.months/12} years`}  
            />
            <DebtTable tableData={tableData} />
          </Fragment>
        )
      }
    </Fragment>
  )
}

export default CarDebt