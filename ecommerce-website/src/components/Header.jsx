import React from 'react';

const Header = ({ isLoggedIn, onLogout }) => {
    return (
        <header className="bg-blue-600 text-white p-4 text-center">
            <h1 className="text-2xl font-bold">My E-Commerce Store</h1>
            <div className="mt-2">
                {isLoggedIn ? (
                    <button
                        onClick={onLogout}
                        className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
                    >
                        Logout
                    </button>
                ) : (
                    <button
                        onClick={onLogout}
                        className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
                    >
                        Login
                    </button>
                )}
            </div>
        </header>
    );
};

export default Header;