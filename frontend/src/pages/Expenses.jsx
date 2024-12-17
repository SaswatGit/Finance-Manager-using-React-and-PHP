import React, { useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';

const Expenses = () => {
  const [expenseData, setExpenseData] = useState({
    amount: '',
    category: '',
    date: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setExpenseData({
      ...expenseData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    axios.post('http://localhost/edit/Projects/Finance%20Manager/backend/expense/addexpense.php', expenseData)
      .then((response) => {
        console.log(response.data);
        if(response.data.status == true){
          Swal.fire({
            title: 'Success!',
            text: response.data.message,
            icon: 'success',
            confirmButtonText: 'OK'
          });
        }else{
          Swal.fire({
            title: 'Error!',
            text: response.data.message,
            icon: 'error',
            confirmButtonText: 'OK'
          });
        }
      })
      .catch((error) => {
        Swal.fire({
          title: 'Error!',
          text: error.response.data.message,
          icon: 'error',
          confirmButtonText: 'OK'
        });
      });
  };


  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Add Expense</h2>
      <form onSubmit={handleSubmit} className="w-50 mx-auto">
        <div className="mb-3">
          <label htmlFor="amount" className="form-label">
            Expense Amount
          </label>
          <input
            type="number"
            className="form-control"
            id="amount"
            name="amount"
            value={expenseData.amount}
            onChange={handleChange}
            placeholder="Enter expense amount"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="category" className="form-label">
            Category
          </label>
          <select
            className="form-select"
            id="category"
            name="category"
            value={expenseData.category}
            onChange={handleChange}
            required
          >
            <option value="" disabled>
              Select category
            </option>
            <option value="Food">Food</option>
            <option value="Transportation">Transportation</option>
            <option value="Utilities">Utilities</option>
            <option value="Entertainment">Entertainment</option>
            <option value="Others">Others</option>
          </select>
        </div>
        <div className="mb-3">
          <label htmlFor="date" className="form-label">
            Date
          </label>
          <input
            type="date"
            className="form-control"
            id="date"
            name="date"
            value={expenseData.date}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary w-100">
          Add Expense
        </button>
      </form>
    </div>
  );
};

export default Expenses;
