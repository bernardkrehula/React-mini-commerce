

const Btn = ({ onClick, variation, children }) => {
    return (
        <button className={variation} onClick={onClick}>
            {children}
        </button>
    )
}

export default Btn;