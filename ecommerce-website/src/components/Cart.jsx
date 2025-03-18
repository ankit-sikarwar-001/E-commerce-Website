import React from 'react';

const Cart = ({ cart, removeFromCart }) => {
    return (
        <div className="p-4">
            <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
            {cart.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <ul>
                    {cart.map((item) => (
                        <li key={item.id} className="flex justify-between items-center border-b py-2">
                            <span>{item.name} - ${item.price}</span>
                            <button
                                onClick={() => removeFromCart(item.id)}
                                className="text-red-600 hover:text-red-800"
                            >
                                Remove
                            </button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Cart;