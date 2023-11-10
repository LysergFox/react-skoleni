import React, { useState } from 'react';
import { Navbar, Nav, Button, Image } from 'react-bootstrap';
import RecipeModalForm from './RecipeModalForm.js';

function Header({ searchTerm, onSearch, toggleViewMode, ingredients }) {
    const [showRecipeModal, setShowRecipeModal] = useState(false);

    const handleOpenRecipeModal = () => {
        setShowRecipeModal(true);
    };

    return (
        <Navbar bg="light" variant="light" fixed="top" className="app-header">
            <Navbar.Brand>Rádoby kuchařka</Navbar.Brand>
            <Nav>
                <Nav.Link onClick={toggleViewMode}>
                    <Button className="button-view" onClick={toggleViewMode}>
                        <Image
                            src={process.env.PUBLIC_URL + '/view.png'}
                            alt="ToggleView"
                            className="icon-view"
                        />
                    </Button>
                </Nav.Link>
                <Nav.Link>
                    <input
                        type="text"
                        placeholder="Search Recipes"
                        value={searchTerm}
                        onChange={onSearch}
                        className={'search-bar form-control'}
                    />
                </Nav.Link>
                <Nav.Link>
                    <Button variant="success" onClick={handleOpenRecipeModal}>
                        Create Recipe
                    </Button>
                </Nav.Link>
            </Nav>
            <RecipeModalForm
                show={showRecipeModal}
                onHide={() => setShowRecipeModal(false)}
                ingredients={ingredients}
            />
        </Navbar>
    );
}

export default Header;
