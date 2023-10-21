import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function ExpenseForm() {
  return (
    <form action="">  
      <label htmlFor="type-select">Type: 
        <select name="expenseTypes" id="expenseTypes">
          <option value="card">Card</option>
          <option value="cash">Cash</option>
          <option value="cryptocoin">Cryptocoin</option>
          <option value="other">Other</option>
        </select>
      </label>
      <label htmlFor="description">Name:
        <input type="text" id="description" name="description" placeholder="What did you spend on?"/>
      </label>
      <label htmlFor="date">Date: 
        <input type="date" name="date" id="date" />
      </label>
      <label htmlFor="amount">Amount:
        <input type="number" />
      </label>
      <input type="submit" value="Add a new expense" />
    </form>
    
  )
}

function ExpenseTable() {
  return (
    <table>
      <thead>
        <tr>
          <th>Type</th>
          <th>Name</th>
          <th>Date</th>
          <th>Amount</th>
        </tr>
      </thead>
      <tbody></tbody>
    </table>
  )
}

export default function FilterableExpenseTable() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="filterableExpenseTable">
        <h1>Simple Expense Manager</h1>
        <h2>Add New Item</h2>
        <div className="expenseForm">
          <ExpenseForm />
        </div> 
        <div className="expenseTable">
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

