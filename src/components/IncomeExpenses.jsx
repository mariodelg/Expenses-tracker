import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const IncomeExpenses = () => {
  const { transactions } = useContext(GlobalContext);

  let income = 0;
  let expense = 0;
  transactions.map((transaction) =>
    transaction.amount >= 0
      ? income += transaction.amount
      : expense += Math.abs(transaction.amount)
  );

  return (
    <div className="inc-exp-container">
      <div>
        <h4>Ingresos</h4>
        <p className="money plus">+${income}</p>
      </div>
      <div>
        <h4>Gastos</h4>
        <p className="money minus">-${expense}</p>
      </div>
    </div>
  );
};

export default IncomeExpenses;
