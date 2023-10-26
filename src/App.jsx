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
    <div class="container mt-5">
      <form action="">  
        <div class="row">
          <div class="col form-group d-flex">
            <label class="col-form-label w-25">Type: </label>
            <select class="form-control w-75"> 
              <option value="card">Card</option>
              <option value="cash">Cash</option>
              <option value="cryptocoin">Cryptocoin</option>
              <option value="other">Other</option>
            </select>
          </div>
          
          <div class="col form-group d-flex">
            <label class="col-form-label w-25">Name: </label>
            <input type="text" placeholder="What did you spend on?" class="form-control w-75"/>
          </div>
        </div>
        
        <div class="row mt-4">
          
          <div class="col form-group d-flex">
            <label class="col-form-label w-25">Date: </label>
            <input type="date" name="date" id="date" class="form-control w-75"/>
          </div>

          <div class="col form-group d-flex">
            <label class="col-form-label w-25" htmlFor="amount">Amount: </label>
            <input type="number"  class="form-control w-75"/>
          </div>

        </div>

        <div class="row mt-4">
          <div class="col">
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
      <table class="table mt-5">
        <thead class="thead-dark">
          <tr>
            <th>Type</th>
            <th>Name</th>
            <th>Date</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="small">Cash</td>
            <td class="small">Car</td>
            <td class="small">October 23rd</td>
            <td class="small">$27,000</td>
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

