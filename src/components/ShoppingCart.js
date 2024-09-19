import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {addItem, removeItem, updateQuantity} from '../redux/CartSlice';

const ShoppingCart = ({onHomeClick}) => {
    const dispatch = useDispatch();
    const cartItems = useSelector((state) => state.cart.items);

    const handleQuantityChange = (id, quantity) => {
        dispatch(updateQuantity({id, quantity: Math.max(1, quantity)}));
    };

    const handleRemoveItem = (id) => {
        dispatch(removeItem(id));
    };

    const calculateTotal = () => {
        return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    };
    const handleCheckout=()=>{
        window.alert('Checkout')
    }

    return (
        <div className="cart">
            <h1>Shopping Cart</h1>
            {cartItems.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <ul>
                    {cartItems.map((item) => (
                        <li key={item.id}>
                            {item.name} - ${item.price} x
                            <button onClick={() => handleQuantityChange(item.id, item.quantity + 1)}>+</button>
                            <input
                                type="number"
                                value={item.quantity}
                                onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value))}
                                min="1"
                            />
                            <button onClick={() => handleQuantityChange(item.id, item.quantity - 1)}>-</button>
                            <button onClick={() => handleRemoveItem(item.id)}>Remove</button>
                        </li>
                    ))}
                </ul>
            )}
            <h2>Total: ${calculateTotal().toFixed(2)}</h2>
            <button className="button" onClick={()=>handleCheckout()}> Checkout</button>
        <br/>
            <button className="button" onClick={onHomeClick}> Continue Shopping</button>
        </div>
    );
};

export default ShoppingCart;