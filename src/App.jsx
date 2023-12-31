import { useState } from 'react';
import './App.css';

let nextId = 0;

export default function FilterableExpenseTable() {
  const [type, setType] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');
  const [amount, setAmount] = useState('');
  const [expenses, setExpenses] = useState(localStorage.getItem('expenseData') ? JSON.parse(localStorage.getItem('expenseData')) : []); 

  const expense = {
    key: nextId++,
    type: type,
    description: description,
    date: date,
    amount: amount
  };

  function handleSubmit(e) {
    // Prevent the browser from reloading the page
    e.preventDefault();
    
  }

  //Two main sections grouped by divs with class row: 1) form 2) table
  //Decided to avoid managing state between components in first React project
  //The trade off is harder to read app

  return (
    <div className="container">
      <h1>Simple Expense Manager</h1>
      <h2>Add New Item</h2>

      <div className="row"> 
        <form name="expense-form" id="expense-form" method="post" onSubmit={handleSubmit}>  
          <div className="row">
            <div className="col form-group d-flex">
              <label className="col-form-label w-25">Type: </label>
              <select 
                value={type}
                name="type" 
                className="form-control w-75" 
                onChange={e => setType(e.target.value)}
                > 
                <option value="">--select--</option>
                <option value="card">Card</option>
                <option value="cash">Cash</option>
                <option value="cryptocoin">Cryptocoin</option>
                <option value="other">Other</option>
              </select>
            </div>
            
            <div className="col form-group d-flex">
              <label className="col-form-label w-25">Name: </label>
              <input 
                value={description} 
                onChange={e => setDescription(e.target.value)} 
                type="text" 
                placeholder="What did you spend on?" 
                className="form-control w-75"
                name="description"
                />
            </div>
          </div>
          
          <div className="row mt-4">
            
            <div className="col form-group d-flex">
              <label className="col-form-label w-25">Date: </label>
              <input 
                value={date}
                type="date" 
                name="date" 
                id="date" 
                className="form-control w-75"
                onChange={e => setDate(e.target.value)}
                />
            </div>

            <div className="col form-group d-flex">
              <label className="col-form-label w-25" htmlFor="amount">Amount: </label>
              <input 
                value={amount}
                type="number"  
                className="form-control w-75"
                name="amount"
                onChange={e => setAmount(e.target.value)}
                />
            </div>

          </div>

          <div className="row mt-4">
            <div className="col">
              <button 
                type="submit" 
                className="btn btn-primary"
                onClick={() => {
                  setExpenses([
                    ...expenses,
                    expense
                  ])
                  localStorage.setItem('expenseData', JSON.stringify([
                    ...expenses,
                    expense
                  ]));

                  setType("");
                  setDescription("");
                  setAmount("");
                  setDate("");
                }}
                >
                Add a new expense 
              </button>
            </div>
          </div>
        </form>
      </div>

      <div className="row">
        <table className="table mt-5" id="table">
          <thead className="thead-dark">
            <tr>
              <th>Type</th>
              <th>Name</th>
              <th>Date</th>
              <th>Amount</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {expenses.map(expense => (
              <tr key={expense.key}>
                <td>{expense.type}</td>
                <td>{expense.description}</td>
                <td>{expense.date}</td>
                <td>{expense.amount}</td>
                <td>
                  <button className="btn btn-warning" onClick={() => {
                    
                    const updatedExpenses = expenses.filter((a) => a.key !== expense.key);
                    setExpenses(updatedExpenses);

                  
                    localStorage.setItem('expenseData', JSON.stringify(updatedExpenses))

                  }}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <button 
          className="btn btn-secondary" 
          onClick={() => {
            localStorage.clear();
            setExpenses([]);
          }}>
          Delete Items
        </button>
      </div>
    </div>
  )
}

