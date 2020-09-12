import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const Balance = () => {
  const { transactions } = useContext(GlobalContext);
  let amount = 0;
  transactions.map((trans) => (amount += trans.amount));
  const sign = amount >= 0 ? "+" : "-"

  return (
    <div className="container">
      <h4 className="">Tu balance</h4>
      <h1 className="">{sign}${Math.abs(amount)}</h1>
    </div>
  );
};

export default Balance;
