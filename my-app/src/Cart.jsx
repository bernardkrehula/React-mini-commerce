
const ShoppingCart = ({cart}) => {
    const { id, name, info, price, amount } = cart;
  
    console.log(id)
    return(
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
    )
}

export default ShoppingCart;