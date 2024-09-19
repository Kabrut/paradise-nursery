import React from 'react';

const TopBar = ({ cartItemsCount, onCartClick, onHomeClick }) => {
    return (
        <div className="top-bar">
            <h2 className="title" onClick={onHomeClick} style={{ cursor: 'pointer' }}>
                Paradise Nursery
            </h2>
            <button className="cart-button" onClick={onCartClick}>
                Cart ({cartItemsCount})
            </button>
        </div>
    );
};

export default TopBar;