import React, {useEffect, useState} from 'react';
import ModalColor from './components/ModalColor';
import Header from './components/Header';
import Footer from './components/Footer';
import MediumRecipes from './components/Recipes';
import './styles/SvgSprinner.css';

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
               return <svg className="spinner" viewBox="0 0 50 50">
                        <circle className="path" cx="25" cy="25" r="20" fill="none" stroke-width="5"></circle>
               </svg>
            case "error":
                return <div>Error: {repipesLoadCall.error.message}</div>;
            case "success":
                return <MediumRecipes searchTerm={searchTerm} recipes={repipesLoadCall.data} ingredients={ingredientsLoadCall.data} viewMode={viewMode}/>;
        }
    }


    return (
        <div className="app-container">
            <Header searchTerm={searchTerm} onSearch={handleSearch} toggleViewMode={toggleViewMode} ingredients={ingredientsLoadCall.data}/>
            <div class="row">
                <div
                    class="col-12 col-sm-6 col-md-4 col-lg-4 col-xl-3"
                    style={{ paddingBottom: "16px" }}
                >
                    <div className="recipe-container">
                        <div className="content">
                            {getChild()}
                        </div>
                    </div>
                </div>
            </div>
            <Footer toggleColorTheoryModal={toggleColorTheoryModal} />
            <ModalColor show={showColorTheoryModal} onClose={toggleColorTheoryModal} />
        </div>
    );
}

export default App;
