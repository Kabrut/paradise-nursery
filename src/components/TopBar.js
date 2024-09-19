import React from 'react';

const TopBar = ({ cartItemsCount, onCartClick, onTitleClick }) => {
    return (
        <div className="top-bar">
            <h2 className="title" onClick={onTitleClick} style={{ cursor: 'pointer' }}>
                Paradise Nursery
            </h2>
            <button className="cart-button" onClick={onCartClick}>
                Cart ({cartItemsCount})
            </button>
        </div>
    );
};

export default TopBar;