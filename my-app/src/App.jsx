import { useState } from 'react'
import './App.css'
import menuData from './menuData'
import SingleDish from './SingleDish'
import Btn from './Btn'
import './Btn.css'
import ShoppingCart from './Cart'

function App() {
  const [ dishes, setDishes ] = useState(menuData)
  const [ getCartClick, isCartClicked ] = useState(false)
  const [ cart, setCart ] = useState([])
  const [ searchInput, setSearchInput ] = useState(0)
  const [ cartPrice, setCartPrice ] = useState(0)
  const [ cartAmount, setCartAmount ] = useState(0)

  const addToCart = (id, price, amount) => {
    setCartPrice(prev => prev + parseFloat(price) * parseFloat(amount));/* dishes.reduce((acc, dish) => acc + parseInt(dish.amount), 0) */
    setCartAmount(prev => prev + amount)
    setDishes(prev => {
      return prev.map(dish =>  dish.id === id ? sumDishesAmount(dish, amount) : dish)
    }
    )
    setCart(prev => {
    const exists = prev.find(item => item.id === id);
    if (exists) {
     
      return prev.map(item =>
        item.id === id
          ? { ...item, amount: item.amount + parseInt(amount) }
          : item
      );
    } else {
      
      const dishToAdd = dishes.find(dish => dish.id === id);
      return [...prev, { ...dishToAdd, amount: parseInt(amount) }];
    }
  });
  }
  const sumDishesAmount = (dish, amount) => {
     return { ...dish, amount: parseInt(amount)}
  }
  const changeAmount = (id, value) => {
    setDishes(prev => prev.map(dish => dish.id === id ? {...dish, amount: value} : dish))
  }
  const changeCartAmount = (id, newAmount) => {
    setCart(prevCart => 
      prevCart
        .map(item => 
          item.id === id 
            ? { ...item, amount: newAmount } 
            : item
        )
        .filter(item => item.amount > 0) 
  );
};

  //Pitati nemanju moze li se staviti neka univerzalna funkcija find?
  return (
    <>
      <div className='main'>
        <div className='web-name'>
          <h1>Mini Commerce</h1>
          <svg onClick={() => {isCartClicked(true)}} xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-shopping-cart"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M6 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" /><path d="M17 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" /><path d="M17 17h-11v-14h-2" /><path d="M6 5l14 1l-1 7h-13" /></svg>
          <h2>{cartAmount}</h2>
        </div>
        <div className='feed'>
          {getCartClick ? <ShoppingCart cart={cart} changeCartAmount={changeCartAmount}/> : 
          <>
            <div className='title'>
              <h2>Search product</h2>
              <input onChange={(e) => setSearchInput(e.target.value)}></input>
            </div>
            <ul className='shop-content'>
              {dishes
              .filter(dish => !searchInput || dish.name.toLowerCase().includes(searchInput.toLowerCase()))
              .map(dish => (<SingleDish key={dish.id} dish={dish} addToCart={addToCart} changeAmount={changeAmount}/>))}
            </ul>
            </>  
          }
        </div>
        <Btn variation="primary" onClick={() => { isCartClicked(prev => !prev) }}>{getCartClick ? 'Back to Products' : 'Go to your cart'}</Btn>
        <div className='total-price'>
          <h4>Total price:</h4>
          <span>${cartPrice.toFixed(2)}</span>
        </div>
      </div>
    </>
  )
}

export default App
