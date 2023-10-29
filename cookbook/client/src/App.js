import React, { useState } from 'react';
import ModalColor from './Components/ModalColor';
import Header from './Components/Header';
import Footer from './Components/Footer';
import MediumRecipes from './recipes/Medium_recipes';

function App() {
    const [showColorTheoryModal, setShowColorTheoryModal] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');

    const toggleColorTheoryModal = () => {
        setShowColorTheoryModal(!showColorTheoryModal);
    };

    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
    };

    return (
        <div className="app-container">
            <Header searchTerm={searchTerm} onSearch={handleSearch} />

            <div className="recipe-container">
                <div className="content">
                    <MediumRecipes searchTerm={searchTerm} />
                </div>
            </div>

            <Footer toggleColorTheoryModal={toggleColorTheoryModal} />
            <ModalColor show={showColorTheoryModal} onClose={toggleColorTheoryModal} />
        </div>
    );
}

export default App;
