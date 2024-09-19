import React from 'react';

const ShoppingCart = ({cartItems}) => {
    const calculateTotal = () => {
        return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    };

    return (
        <div>
            <div className="box">
                <h1>Shopping Cart</h1>
                {cartItems.length === 0 ? (
                    <p>Your cart is empty.</p>
                ) : (
                    <ul>
                        {cartItems.map((item) => (
                            <li key={item.id}>
                                {item.name} - ${item.price} x
                                <input
                                    type="number"
                                    value={item.quantity}
                                    min="1"
                                    readOnly
                                />
                            </li>
                        ))}
                    </ul>
                )}
                <h2>Total: ${calculateTotal()}</h2>
            </div>
        </div>
    );
};

export default ShoppingCart;