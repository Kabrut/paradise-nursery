import React from 'react';
import { plantData } from '../data/plants';
import Plant from './Plant';

const PlantList = ({ addToCart }) => {
    const categories = [...new Set(plantData.map(plant => plant.category))];

    return (
        <div className="plant-list">
            {categories.map((category) => (
                <div key={category}>
                    <h2>{category}</h2>
                    <div className="plants-container">
                        {plantData
                            .filter(plant => plant.category === category)
                            .map(plant => (
                                <Plant key={plant.id} plant={plant} addToCart={addToCart} />
                            ))}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default PlantList;