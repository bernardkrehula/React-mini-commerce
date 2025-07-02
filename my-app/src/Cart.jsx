import './App.css'

const ShoppingCart = ({cart}) => {
     if (!cart || cart.length === 0) return <p>Cart is empty.</p>;

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
            </li>
            <hr></hr>
        </>
      ))}
    </ul>
    </>
  );
}

export default ShoppingCart;