import React, {useContext} from 'react'
import {GlobalContext} from '../context/GlobalState'

const TransactionItem = (props) => {
    const { deleteTransaction } = useContext(GlobalContext);

    const {transaction} = props
    const sign = transaction.amount >= 0 ? "+" : "-"

    return (
        <li className={transaction.amount >= 0 ? "plus" : "minus"}>
            <span>{transaction.text}</span>
            <span>
                {sign}${Math.abs(transaction.amount)}
            </span>
            <button 
                className="delete-btn" 
                onClick={() => deleteTransaction(transaction.id)}
            >x</button>        
        </li>
    )
}

export default TransactionItem
