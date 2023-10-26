import { useState } from 'react';
import './App.css';

function ExpenseForm() {
  
  function addExpense() {
    console.log("clicked!")
  }
  
  return (
  
    <div className="container mt-5">
      <form name="expense-form" id="expense-form">  
        <div className="row">
          <div className="col form-group d-flex">
            <label className="col-form-label w-25">Type: </label>
            <select className="form-control w-75"> 
              <option value="card">Card</option>
              <option value="cash">Cash</option>
              <option value="cryptocoin">Cryptocoin</option>
              <option value="other">Other</option>
            </select>
          </div>
          
          <div className="col form-group d-flex">
            <label className="col-form-label w-25">Name: </label>
            <input type="text" placeholder="What did you spend on?" className="form-control w-75"/>
          </div>
        </div>
        
        <div className="row mt-4">
          
          <div className="col form-group d-flex">
            <label className="col-form-label w-25">Date: </label>
            <input type="date" name="date" id="date" className="form-control w-75"/>
          </div>

          <div className="col form-group d-flex">
            <label className="col-form-label w-25" htmlFor="amount">Amount: </label>
            <input type="number"  className="form-control w-75"/>
          </div>

        </div>

        <div className="row mt-4">
          <div className="col">
            <input 
              type="button" 
              value="Add a new expense" 
              className="btn btn-primary"
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
      <table className="table mt-5" id="table">
        <thead className="thead-dark">
          <tr>
            <th>Type</th>
            <th>Name</th>
            <th>Date</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="small">Cash</td>
            <td className="small">Car</td>
            <td className="small">October 23rd</td>
            <td className="small">$27,000</td>
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
      <div className="container">
        <h1>Simple Expense Manager</h1>
        <h2>Add New Item</h2>
        <div className="row">
          <ExpenseForm />          
        </div>
        <div className="row">
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

