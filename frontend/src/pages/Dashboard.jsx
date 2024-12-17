import React, { useState, useEffect } from 'react';
import LineChart from '../components/LineChart';
import axios from 'axios';

const Dashboard = () => {
  const [incomeLabels, setIncomeLabels] = useState([]);
  const [expenseLabels, setExpenseLabels] = useState([]);
  const [incomeData, setIncomeData] = useState([]);
  const [expenseData, setExpenseData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost/edit/Projects/Finance%20Manager/backend/income/getincome.php')
      .then((response) => {
        const incomeData = response.data.map((item) => item.income_amount);
        const incomeLabels = response.data.map((item) => item.income_date);
        setIncomeData(incomeData);
        setIncomeLabels(incomeLabels);
      })
      .catch((error) => {
        console.error(error);
      });

    axios.get('http://localhost/edit/Projects/Finance%20Manager/backend/expense/getexpense.php')
      .then((response) => {
        const expenseData = response.data.map((item) => item.expense_amount);
        const expenseLabels = response.data.map((item) => item.expense_date);
        setExpenseData(expenseData);
        setExpenseLabels(expenseLabels);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-12">
          <h1 className="text-center mb-4 text-primary">Dashboard</h1>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-md-8 col-lg-6 my-3">
          <div className="card shadow-lg">
            <div className="card-header bg-primary text-white text-center">
              <h5>Income Overview</h5>
            </div>
            <div className="card-body">
              <LineChart labels={incomeLabels} pricedata={incomeData} type="Income Data" />
            </div>
          </div>
        </div>
        <div className="col-md-8 col-lg-6 my-3">
          <div className="card shadow-lg">
            <div className="card-header bg-primary text-white text-center">
              <h5>Expense Overview</h5>
            </div>
            <div className="card-body">
              <LineChart labels={expenseLabels} pricedata={expenseData} type="Expense Data" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;