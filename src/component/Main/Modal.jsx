import React from 'react';
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux"

function Modal() {
    const dispatch = useDispatch()
    const [isOpen, setIsOpen] = useState(true)
    const product = useSelector((state) => state.menu?.selectedProduct);

    return (
        <div>
            <div className={`modal-overlay ${isOpen ? "active" : ""}`} onClick={() => setIsOpen(!open)}>
                <div className={`modal-box ${isOpen ? "active" : ""}`} onClick={(e) => e.stopPropagation()}>
                    <img src={product.coverImageSrc} alt={product.name[0].value} />
                    <div>
                        <h2>{product.name[0].value}</h2>
                        <p>{product.category}</p>
                        <p>₼ {product.rate.amount}</p>
                        <div className="btn">
                            <button>-</button>
                            <span>1</span>
                            <button>+</button>
                        </div>
                        <ul>
                            <li>Size: {product.size}</li>
                            <li>Nuts: {product.nuts}</li>
                            <li>Syrups: {product.syrups}</li>
                            <li>Fruits: {product.fruits}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal