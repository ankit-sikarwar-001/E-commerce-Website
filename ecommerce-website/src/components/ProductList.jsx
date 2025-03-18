import React from 'react';

const products = [
    { id: 1, name: 'Product 1', price: 20, image: 'images/product1.jpg' },
    { id: 2, name: 'Product 2', price: 30, image: 'images/product2.jpg' },
    { id: 3, name: 'Product 3', price: 40, image: 'images/product3.jpg' },
];

const ProductList = ({ addToCart, isLoggedIn }) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
            {products.map((product) => (
                <div key={product.id} className="border p-4 rounded-lg shadow-lg">
                    <img src={product.image} alt={product.name} className="w-full h-48 object-cover mb-4" />
                    <h2 className="text-xl font-bold">{product.name}</h2>
                    <p className="text-gray-700">${product.price}</p>
                    {isLoggedIn ? (
                        <button
                            onClick={() => addToCart(product)}
                            className="mt-2 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                        >
                            Add to Cart
                        </button>
                    ) : (
                        <button
                            onClick={() => addToCart(product)}
                            className="mt-2 bg-gray-600 text-white px-4 py-2 rounded cursor-not-allowed"
                            disabled
                        >
                            Login to Buy
                        </button>
                    )}
                </div>
            ))}
        </div>
    );
};

export default ProductList;