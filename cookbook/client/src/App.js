import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import ModalColor from './Components/ModalColor';
import './App.css';
import './styles/AppStyle.css';
import Small_Recipes from './recipes/Small_recipes';
import Medium_Recipes from './recipes/Medium_recipes';

function App() {
    const [showSmallRecipes, setShowSmallRecipes] = useState(true);
    const [showModal, setShowModal] = useState(false);

    const toggleCard = () => {
        setShowSmallRecipes(!showSmallRecipes);
    };

    const toggleModal = () => {
        setShowModal(!showModal);
    };

    return (
        <div className="app-container">
            <div className={`recipe-container ${showSmallRecipes ? '' : 'hidden'}`}>
                <Small_Recipes />
            </div>
            <div className={`recipe-container ${showSmallRecipes ? 'hidden' : ''}`}>
                <Medium_Recipes />
            </div>
            <Button onClick={toggleCard} className="toggle-button">
                >>
            </Button>
            <Button onClick={toggleModal} className="modal-button">
                Color Theory
            </Button>
            {showModal && <ModalColor show={showModal} onClose={toggleModal} />}
        </div>
    );
}

export default App;
