import { useState } from "react";
import Btn from "./Btn";
import './Btn.css'

const SingleDish = ({dish, addToCart }) => {
    const { id, name, info, price, amount } = dish;
    const [ getAmount, setAmount ] = useState(1);

    
    return (
        <>
            <li key={id}>
                <div className='product-info'>
                    <h3>{name}</h3>
                    <h4>{info}</h4>
                    <span>${price}</span>
                </div>
                <div className='product-amount'>
                    <h3>Amount</h3>
                    <input min="0" type="number" defaultValue={getAmount} onChange={(e) => {setAmount(Number(e.target.value))}}/>
                    <Btn variation="ghost" onClick={() => {addToCart(id, price, getAmount)}}>+ADD</Btn>
                </div>
            </li>
          <hr></hr>
        </>
    )
}

export default SingleDish;