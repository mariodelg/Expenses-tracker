import React, {useContext} from 'react'
import TransactionItem from './TransactionItem';
import {GlobalContext} from '../context/GlobalState'

const TransactionList = () => {
    const { transactions } = useContext(GlobalContext)
    return (
        <div className="transaction">
            <h2 className="underline-text">Movimientos</h2>
            <ul className="list">
                {transactions.map(transaction => (
                    <TransactionItem
                        key={transaction.id}
                        transaction={transaction}
                    />
                ))}
            </ul>
        </div>
    )
}

export default TransactionList
