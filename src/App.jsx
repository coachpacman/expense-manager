import { useState } from 'react';
import './App.css';

function ExpenseForm() {
  
  function addExpense() {
    console.log("clicked!")
  }
  
  return (
  
    <div class="container mt-5">
      <form name="expense-form" id="expense-form">  
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
            <input 
              type="button" 
              value="Add a new expense" 
              class="btn btn-primary"
              onClick={addExpense}
              />
          </div>
        </div>
      </form>
    </div>
    
  )
}

function ExpenseTable() {
  return (
    <>
      <table class="table mt-5" id="table">
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
      <div class="container">
        <h1>Simple Expense Manager</h1>
        <h2>Add New Item</h2>
        <div class="row">
          <ExpenseForm />          
        </div>
        <div class="row">
          <ExpenseTable />          
        </div>
      </div>
    </>
  )
}

//Hierarchy of components
//FilterableExpenseTable
  //ExpenseForm
  //ExpenseTable

