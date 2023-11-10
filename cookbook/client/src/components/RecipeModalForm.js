import React, { useState } from 'react';
import { Button, Modal, Form } from 'react-bootstrap';
import '../styles/RecipeModalStyle.css'; // Import the CSS file

function RecipeModalForm({ show, onHide }) {
    const [recipeName, setRecipeName] = useState('');
    const [recipeDescription, setRecipeDescription] = useState('');

    const handleClose = () => {
        setRecipeName('');
        setRecipeDescription('');
        onHide();
    };

    const handleSave = () => {
        handleClose();
    };

    return (
            <Modal show={show} onHide={handleClose}>
                <div className="modal-container">

                    <div className="modal-content">
                    <Modal.Header>
                        <Modal.Title>Vytvor recept</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form>
                            <Form.Group controlId="recipeName">
                                <Form.Label>Nazev</Form.Label>
                                <Form.Control
                                    type="text"
                                    value={recipeName}
                                    onChange={(e) => setRecipeName(e.target.value)}
                                />
                            </Form.Group>
                            <Form.Group controlId="recipeDescription">
                                <Form.Label>Postup</Form.Label>
                                <Form.Control
                                    as="textarea"
                                    rows={3}
                                    value={recipeDescription}
                                    onChange={(e) => setRecipeDescription(e.target.value)}
                                />
                            </Form.Group>
                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Zavrit
                        </Button>
                        <Button variant="primary" onClick={handleSave}>
                            Ulozit
                        </Button>
                    </Modal.Footer>
                    </div>
                </div>
            </Modal>


    );
}

export default RecipeModalForm;
