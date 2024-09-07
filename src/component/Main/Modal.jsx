import { useDispatch, useSelector } from "react-redux"
import { decrement, increment } from "../../redux/counterSlice";

function Modal({ isOpen, setIsOpen }) {
    const product = useSelector((state) => state.menu?.selectedProduct);
    const { value } = useSelector((state) => state.counter)
    const dispatch = useDispatch()

    return (
        <div>
            <div className={`modal-overlay ${isOpen ? "active" : ""}`} onClick={() => setIsOpen(!open)}>
                <div className={`modal-box ${isOpen ? "active" : ""}`} onClick={(e) => e.stopPropagation()}>
                    <img
                        src={`http://localhost:5000/${product?.coverImageSrc}`}
                        onError={(e) => {
                            e.target.src = "https://esquirescoffee.co.uk/wp-content/uploads/2021/09/mike-kenneally-tNALoIZhqVM-unsplash.jpg"
                        }}
                        alt={product?.name[0].value}
                    />
                    <div>
                        <h2>{product?.name[0].value}</h2>
                        <p>{product?.category}</p>
                        <p>₼ {product?.rate.amount}</p>
                        <div className="btn">
                            <button onClick={() => dispatch(decrement())}>-</button>
                            <span>{value}</span>
                            <button onClick={() => dispatch(increment())}>+</button>
                        </div>
                        <ul>
                            <li>Size: Normal size</li>
                            <li>Calories: {product?.calories}</li>
                            <li>Syrups: Nope, we are poor</li>
                            <li>Fruits: Probably, i have</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal