import React from 'react';

const Plant = ({ plant, addToCart }) => {
    return (
        <div className="plant-card">
            <img src={plant.thumbnail} alt={plant.name} className="plant-thumbnail" />
            <h3>{plant.name}</h3>
            <p>{plant.price}</p>
            <button onClick={() => addToCart(plant)}>Add to Cart</button>
        </div>
    );
};

export default Plant;