
const Btn = ({ onClick, children }) => {
    return (
        <button className="cart-btn" onClick={onClick}>
            {children}
        </button>
    )
}

export default Btn;