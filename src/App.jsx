import { useState } from 'react';
import './App.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col';

function ExpenseForm() {
  return (
    <Form>
      <Form.Group className="mb-">
        <Form.Label>Type:</Form.Label>
        <Form.Select>
          <option value="card">Card</option>
          <option value="cash">Cash</option>
          <option value="Cryptocoin">Cryptocoin</option>
          <option value="Other">Other</option>
        </Form.Select>
      </Form.Group>
      <Form.Group className='mb-3' controlId='formBasicEmail'>
        <Form.Label>Email address</Form.Label>
      </Form.Group>
    </Form>
    // <form action="">  
    //   <label htmlFor="type-select">Type: 
    //     <select name="expenseTypes" id="expenseTypes"> 
    //       <option value="card">Card</option>
    //       <option value="cash">Cash</option>
    //       <option value="cryptocoin">Cryptocoin</option>
    //       <option value="other">Other</option>
    //     </select>
    //   </label>
    //   <label htmlFor="description">Name:
    //     <input type="text" id="description" name="description" placeholder="What did you spend on?"/>
    //   </label>
    //   <label htmlFor="date">Date: 
    //     <input type="date" name="date" id="date" />
    //   </label>
    //   <label htmlFor="amount">Amount:
    //     <input type="number" />
    //   </label>
    //   <input type="submit" value="Add a new expense" />
    // </form>
    
  )
}

function ExpenseTable() {
  return (
    <Table>
      <thead className="table-secondary">
        <tr>
          <th>Type</th>
          <th>Name</th>
          <th>Date</th>
          <th>Amount</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Cash</td>
          <td>Car</td>
          <td>October 23rd</td>
          <td>$27,000</td>
        </tr>
      </tbody>
    </Table>
  )
}

export default function FilterableExpenseTable() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Container>
        <h1>Simple Expense Manager</h1>
        <h2>Add New Item</h2>
        <Row>
          <ExpenseForm />
        </Row>
        <Row>
          <ExpenseTable />
        </Row>
      </Container>
    </>
  )
}

//Hierarchy of components
//FilterableExpenseTable
  //ExpenseForm
  //ExpenseTable

