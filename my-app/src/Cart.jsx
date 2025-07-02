import './App.css'
import Btn from './Btn';
import './Btn.css'

const ShoppingCart = ({cart, changeCartAmount}) => {
     if (!cart || cart.length === 0) return <p className='empty-cart'>Cart is empty...</p>;

    const increase = (id, amount) => {
        changeCartAmount(id, amount + 1);
    };

  const decrease = (id, amount) => {
    changeCartAmount(id, amount - 1);
  };
  return (
    <>
    <ul className='shop-content'>
      {cart.map(({ id, name, info, price, amount }) => (
        <>
            <li key={id}>
            <div className='product-info'>
                <h3>{name}</h3>
                <h4>{info}</h4>
                <span>${price}</span>
            </div>
            <div className='product-amount'>
                <button onClick={() => decrease(id, amount)}>-</button>
                <span style={{ margin: "0 10px" }}>{amount}</span>
                <button onClick={() => increase(id, amount)}>+</button>
            </div>
            </li>
            <hr></hr>
        </>
      ))}
    </ul>
    </>
  );
}

export default ShoppingCart;