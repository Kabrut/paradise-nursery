import React, { useState } from 'react';
import PlantList from './components/PlantList';
import ShoppingCart from './components/ShoppingCart';
import TopBar from './components/TopBar';
import './App.css';

function App() {
    const [showPlantList, setShowPlantList] = useState(false);
    const [showCart, setShowCart] = useState(false);
    const [cartItems, setCartItems] = useState([]);

    const handleClick = () => {
        setShowPlantList(true);
    };

    const handleCartClick = () => {
        setShowCart(!showCart);
        setShowPlantList(false); // Hide PlantList when cart is opened
    };

    const handleTitleClick = () => {
        setShowCart(false); // Hide ShoppingCart when title is clicked
        setShowPlantList(true); // Show PlantList
    };

    const addToCart = (plant) => {
        setCartItems((prevItems) => {
            const existingItem = prevItems.find(item => item.id === plant.id);
            if (existingItem) {
                return prevItems.map(item =>
                    item.id === plant.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
            } else {
                return [...prevItems, { ...plant, quantity: 1 }];
            }
        });
    };

    const cartItemsCount = cartItems.reduce((total, item) => total + item.quantity, 0);

    return (
        <div className="App">
            {showPlantList &&  <TopBar
                cartItemsCount={cartItemsCount}
                onCartClick={handleCartClick}
                onTitleClick={handleTitleClick} // Pass the title click handler
            /> }
            {!showCart && !showPlantList && (
                <div className="background-first">
                    <div className="content">
                        <div className="center">
                            <h1 className="title">Welcome to Paradise Nursery</h1>
                            <button className="button" onClick={handleClick}>
                                Get Started
                            </button>
                        </div>
                        <p className="paragraph-first">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae, delectus distinctio dolore ea
                            earum eos est ipsa maiores molestias nemo obcaecati quas quod recusandae sequi sit soluta sunt
                            vel voluptatibus?  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae, delectus distinctio dolore ea
                            earum eos est ipsa maiores molestias nemo obcaecati quas quod recusandae sequi sit soluta sunt
                            vel voluptatibus?  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae, delectus distinctio dolore ea
                            earum eos est ipsa maiores molestias nemo obcaecati quas quod recusandae sequi sit soluta sunt

                            vel voluptatibus?  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae, delectus distinctio dolore ea
                            earum eos est ipsa maiores molestias nemo obcaecati quas quod recusandae sequi sit soluta sunt
                            vel voluptatibus?  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae, delectus distinctio dolore ea
                            earum eos est ipsa maiores molestias nemo obcaecati quas quod recusandae sequi sit soluta sunt

                            vel voluptatibus?  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae, delectus distinctio dolore ea
                            earum eos est ipsa maiores molestias nemo obcaecati quas quod recusandae sequi sit soluta sunt
                            vel voluptatibus?
                        </p>
                    </div>


                </div>
            )}
            {showPlantList && <PlantList addToCart={addToCart} />}
            {showCart && <ShoppingCart cartItems={cartItems} />}
        </div>
    );
}

export default App;