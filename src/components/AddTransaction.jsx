import React, { useState, useContext } from 'react'
import {GlobalContext} from '../context/GlobalState'

const AddTransaction = () => {
    const [text, setText] = useState('');
    const [amount, setAmount] = useState(0);

    const { addTransaction } = useContext(GlobalContext);

    const onSubmit = e => {
      e.preventDefault();
  
      const newTransaction = {
        id: Math.floor(Math.random() * 100000000),
        text,
        amount: +amount
      }
  
      addTransaction(newTransaction);
    }

    return (
        <div className="add-transact__conatiner">
            <h2 className="underline-text">Añadir nuevo movimiento</h2>
            <form action="" onSubmit={onSubmit}>
                <div className="form-control">
                    <label htmlFor="text">Descripcion</label>
                    <input 
                        type="text" 
                        id="text"
                        value={text} 
                        onChange={(e) => setText(e.target.value)} 
                        placeholder="Escribe aqui la descripcion"
                    /> 
                </div>
                <div className="form-control">
                    <label htmlFor="amount">
                        Monto <br />
                        (Montos negativos se tomaran como gastos, montos positivos como ingreso)
                    </label>
                    <input 
                        type="number" 
                        id="amount" 
                        value={amount} 
                        onChange={(e) => setAmount(e.target.value)} 
                        placeholder="Monto"
                    />
                </div>
                <button className="btn">Añadir</button>
            </form>
        </div>
    )
}

export default AddTransaction
