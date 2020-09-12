import React from 'react';
import '../assets/styles/App.css';

import Header from '../components/Header'
import Balance from '../components/Balance';
import IncomeExpenses from '../components/IncomeExpenses';
import TransactionList from '../components/TransactionList';
import AddTransaction from '../components/AddTransaction';

import { GlobalProvider } from '../context/GlobalState';

function App() {
  return (
    <div className="App">
      <GlobalProvider>
        <Header />
        <Balance />
        <IncomeExpenses />
        <TransactionList />
        <AddTransaction />
      </GlobalProvider>
    </div>
  );
}

export default App;
