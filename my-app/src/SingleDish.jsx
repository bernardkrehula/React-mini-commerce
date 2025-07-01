import { useState } from "react";

const SingleDish = ({dish, addToCart }) => {
    const { id, name, info, price, amount } = dish;
    const [ getAmount, setAmount ] = useState(dish);

    
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
                    <input type="number" defaultValue={amount} onClick={(e) => {setAmount(Number(e.target.value))}}/>
                    <button onClick={() => {addToCart(id, getAmount)}}>+ADD</button>
                </div>
            </li>
          <hr></hr>
        </>
    )
}

export default SingleDish;