import { useState } from 'react';
import './App.css';
// import Form from 'react-bootstrap/Form';
// import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container'
// import Col from 'react-bootstrap/Col';

function ExpenseForm() {
  return (
    // <Form>
    //   <Form.Group className="mb-">
    //     <Form.Label>Type:</Form.Label>
    //     <Form.Select>
    //       <option value="card">Card</option>
    //       <option value="cash">Cash</option>
    //       <option value="Cryptocoin">Cryptocoin</option>
    //       <option value="Other">Other</option>
    //     </Form.Select>
    //   </Form.Group>
    //   <Form.Group className='mb-3' controlId='formBasicEmail'>
    //     <Form.Label>Email address</Form.Label>
    //   </Form.Group>
    // </Form>
    <div class="container">
      <form action="">  
        <div class="form-group row">
          <label htmlFor="type-select" class="col-sm-3 col-form-label">Type: </label>
          <div class="col-sm-9">
            <select name="expenseTypes" id="expenseTypes" class="form-control"> 
              <option value="card">Card</option>
              <option value="cash">Cash</option>
              <option value="cryptocoin">Cryptocoin</option>
              <option value="other">Other</option>
            </select>
          </div>
        </div>
        
        <div class="form-group row">
          <label htmlFor="description" class="col-sm-3 col-form-label">Name: </label>
          <div class="col-sm-9">
            <input type="text" id="description" name="description" placeholder="What did you spend on?" class="form-control"/>
          </div>
        </div>
        
        <div class="form-group row">
          <label htmlFor="date" class="col-sm-3 col-form-label">Date: </label>
          <div class="col-sm-9">
            <input type="date" name="date" id="date"  class="form-control"/>
          </div>
        </div>

        <div class="form-group row">
          <label class="col-sm-3 col-form-label" htmlFor="amount">Amount: </label>
          <div class="col-sm-9">
            <input type="number"  class="form-control"/>
          </div>
        </div>
        
        <div class="row">
          <div class="col-sm-9 offset-sm-3">
            <button type="submit" class="btn btn-primary">Add a new expense</button> 
          </div>
        </div>
      </form>
    </div>
    
  )
}

function ExpenseTable() {
  return (
    <>
      <table class="table">
        <thead>
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
      </table>
    </>
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

