import React, {Fragment} from 'react'
import {Table} from 'semantic-ui-react'

const DebtTable = props => {
  return (
    <Fragment>
      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell textAlign="center">Date</Table.HeaderCell>
            <Table.HeaderCell textAlign="center">Payment</Table.HeaderCell>
            <Table.HeaderCell textAlign="center">Interest</Table.HeaderCell>
            <Table.HeaderCell textAlign="center">Principal</Table.HeaderCell>
            <Table.HeaderCell textAlign="center">Balance</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {props.tableData.map(
            (row, i) => {
              return (
                <Table.Row key={i}>
                  <Table.Cell textAlign="center">{row.month}</Table.Cell>
                  <Table.Cell textAlign="center">${(row.payment)}</Table.Cell>
                  <Table.Cell textAlign="center">${(row.interest)}</Table.Cell>
                  <Table.Cell textAlign="center">${(row.principal)}</Table.Cell>
                  <Table.Cell textAlign="center">${(row.balance)}</Table.Cell>
                </Table.Row>
              )
            }
          )}
        </Table.Body>
      </Table>
    </Fragment>
  )
}

export default DebtTable