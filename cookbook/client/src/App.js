import React, {useEffect, useState} from 'react';
import ModalColor from './Components/ModalColor';
import Header from './Components/Header';
import Footer from './Components/Footer';
import MediumRecipes from './recipes/Medium_recipes';

function App() {
    const [showColorTheoryModal, setShowColorTheoryModal] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const [repipesLoadCall, setRepipesLoadCall] = useState(
        {state: "pending"}
    );
    const [ingredientsLoadCall, setIngredientsLoadCall] = useState(
        {state: "pending"}
    );
    const toggleColorTheoryModal = () => {
        setShowColorTheoryModal(!showColorTheoryModal);
    };
    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
    };
    const [viewMode, setViewMode] = useState('cards');
    const toggleViewMode = () => {
        setViewMode(viewMode === 'cards' ? 'table' : 'cards');
    };

    useEffect(() => {
        if (repipesLoadCall.state === "pending") {
            fetch('//localhost:3000/recipe/list')
                .then((response) => response.json())
                .then((data) => {
                    setRepipesLoadCall({state: "success", data: data});
                })
                .catch((error) => {
                    setRepipesLoadCall({state: "error", error: error});
                });
        }
        if (ingredientsLoadCall.state === "pending") {
            fetch('//localhost:3000/ingredient/list')
                .then((response) => response.json())
                .then((data) => {
                    setIngredientsLoadCall({state: "success", data: data});
                })
                .catch((error) => {
                    setIngredientsLoadCall({state: "error", error: error});
                });
        }
    }, []);

    function getChild() {
        switch (repipesLoadCall.state && ingredientsLoadCall.state) {
            case "pending":
                return <div>Loading...</div>;
            case "error":
                return <div>Error: {repipesLoadCall.error.message}</div>;
            case "success":
                return <MediumRecipes searchTerm={searchTerm} recipes={repipesLoadCall.data} ingredients={ingredientsLoadCall.data} viewMode={viewMode}/>;
        }
    }


    return (
        <div className="app-container">
            <Header searchTerm={searchTerm} onSearch={handleSearch} toggleViewMode={toggleViewMode}/>

            <div className="recipe-container">
                <div className="content">
                    {getChild()}
                </div>
            </div>

            <Footer toggleColorTheoryModal={toggleColorTheoryModal} />
            <ModalColor show={showColorTheoryModal} onClose={toggleColorTheoryModal} />
        </div>
    );
}

export default App;
