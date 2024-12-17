import React, { useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';

const Income = () => {
  const [incomeData, setIncomeData] = useState({
    amount: '',
    source: '',
    date: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setIncomeData({
      ...incomeData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    axios.post('http://localhost/edit/Projects/Finance%20Manager/backend/income/addincome.php', incomeData)
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
          console.log(response.data);
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
      <h2 className="text-center mb-4">Add Income</h2>
      <form onSubmit={handleSubmit} className="w-50 mx-auto">
        <div className="mb-3">
          <label htmlFor="amount" className="form-label">
            Income Amount
          </label>
          <input
            type="number"
            className="form-control"
            id="amount"
            name="amount"
            value={incomeData.amount}
            onChange={handleChange}
            placeholder="Enter income amount"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="source" className="form-label">
            Source
          </label>
          <input
            type="text"
            className="form-control"
            id="source"
            name="source"
            value={incomeData.source}
            onChange={handleChange}
            placeholder="Enter income source"
            required
          />
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
            value={incomeData.date}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary w-100">
          Add Income
        </button>
      </form>
    </div>
  );
};

export default Income;
