import React from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from '../redux/CartSlice';

const Plant = ({ plant }) => {
    const dispatch = useDispatch();

    const handleAddToCart = () => {
        dispatch(addItem({ id: plant.id, name: plant.name, price: plant.price, quantity: 1 }));
    };

    return (
        <div className="plant-card">
            <img src={plant.thumbnail} alt={plant.name} className="plant-thumbnail" />
            <h3>{plant.name}</h3>
            <p>{plant.price}</p>
            <button onClick={handleAddToCart}>Add to Cart</button>
        </div>
    );
};

export default Plant;