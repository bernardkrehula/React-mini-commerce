import { useState } from 'react'
import './App.css'

function App() {


  return (
    <>
      <div className='main'>
        <div className='title'>
          <h1>Mini Commerce</h1>
          <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-shopping-cart"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M6 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" /><path d="M17 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" /><path d="M17 17h-11v-14h-2" /><path d="M6 5l14 1l-1 7h-13" /></svg>
        </div>
        <div className='feed'>
          <div>
            <h2>Search product</h2>
            <input></input>
          </div>
          <ul className='shop-content'>
            <li>
              <div className='product-info'>
                <h3>Sushi</h3>
                <h4>Finest fish and veggies</h4>
                <span>$22.99</span>
              </div>
              <div className='product-amount'>
                <h3>Amount</h3>
                <input type="number" />
                <button>Add</button>
              </div>
            </li>
            
          </ul>
        </div>
        <button>Go to your cart</button>
        <div>
          <h4>Total price:</h4>
          <span>$0.00</span>
        </div>
      </div>
    </>
  )
}

export default App
