import React, { useState, useEffect } from "react";
import { Modal, Button, Form, Col, Row } from "react-bootstrap";

function RecipeForm({ show, onHide, ingredientsList, setIngredientsList }) {
    const [recipeName, setRecipeName] = useState('');
    const [recipeDescription, setRecipeDescription] = useState('');
    const [ingredients, setIngredients] = useState([{ ingredient: '', quantity: '', unit: '' }]);

    useEffect(() => {
        // Fetch ingredients if not available
        if (!ingredientsList) {
            // Assuming you have a function for fetching ingredients
            // You can customize this based on your actual implementation
            fetchIngredients();
        }
    }, [ingredientsList]);

    const fetchIngredients = () => {
        // Fetch ingredients from the server
        fetch('//localhost:3000/ingredient/list')
            .then((response) => response.json())
            .then((data) => {
                // Set the ingredients list in the parent component or state
                // This function should be provided by the parent component
                // Example: setIngredientsList(data);
            })
            .catch((error) => {
                console.error("Error fetching ingredients:", error);
                // Handle error if needed
            });
    };

    const handleClose = () => {
        setRecipeName('');
        setRecipeDescription('');
        setIngredients([{ ingredient: '', quantity: '', unit: '' }]);
        onHide();
    };

    const handleSave = () => {
        // Process data and call server API (recipe/create) here
        const formData = {
            recipeName,
            recipeDescription,
            ingredients,
        };

        // Display form data in the console
        console.log(formData);

        // You can make an API call here to send the data to the server

        handleClose();
    };

    const handleIngredientChange = (index, key, value) => {
        const newIngredients = [...ingredients];
        newIngredients[index][key] = value;
        setIngredients(newIngredients);
    };

    const addIngredient = () => {
        setIngredients([...ingredients, { ingredient: '', quantity: '', unit: '' }]);
    };

    const removeIngredient = (index) => {
        const newIngredients = [...ingredients];
        newIngredients.splice(index, 1);
        setIngredients(newIngredients);
    };

    return (
        <>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Přidat recept</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group controlId="recipeName">
                            <Form.Label>Název receptu</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Zadejte název receptu"
                                value={recipeName}
                                onChange={(e) => setRecipeName(e.target.value)}
                            />
                        </Form.Group>

                        <Form.Group controlId="recipeDescription">
                            <Form.Label>Popis receptu</Form.Label>
                            <Form.Control
                                as="textarea"
                                rows={4}
                                placeholder="Zadejte popis receptu"
                                value={recipeDescription}
                                onChange={(e) => setRecipeDescription(e.target.value)}
                            />
                        </Form.Group>

                        <Form.Group controlId="ingredients">
                            <Form.Label>Ingredience</Form.Label>
                            {ingredients.map((ingredient, index) => (
                                <Row key={index}>
                                    <Col>
                                        <Form.Control
                                            as="select"
                                            style={{width: "15rem"}}
                                            placeholder="Ingredience"
                                            value={ingredient.ingredient}
                                            onChange={(e) => handleIngredientChange(index, 'ingredient', e.target.value)}
                                        >
                                            <option value="">Vyberte ingredienci</option>
                                            {ingredientsList &&
                                                ingredientsList.map((ingredientOption, optionIndex) => (
                                                    <option key={optionIndex} value={ingredientOption.name}>
                                                        {ingredientOption.name}
                                                    </option>
                                                ))}
                                        </Form.Control>
                                    </Col>
                                    <Col>
                                        <Form.Control
                                            placeholder="Množství"
                                            value={ingredient.quantity}
                                            style={{width: "5rem"}}
                                            onChange={(e) => handleIngredientChange(index, 'quantity', e.target.value)}
                                        />
                                    </Col>
                                    <Col>
                                        <Form.Control
                                            placeholder="Jednotka"
                                            value={ingredient.unit}
                                            style={{width: "5rem"}}
                                            onChange={(e) => handleIngredientChange(index, 'unit', e.target.value)}
                                        />
                                    </Col>
                                    <Col>
                                        {index > 0 && (
                                            <Button variant="danger" style={{marginTop:"0.5rem", marginBottom:"0.5rem"}} onClick={() => removeIngredient(index)}>
                                                Odstranit
                                            </Button>
                                        )}
                                    </Col>
                                </Row>
                            ))}
                        </Form.Group>
                        <Button variant="primary" onClick={addIngredient} style={{marginTop:"1rem"}}>
                            Přidat ingredienci
                        </Button>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Zavřít
                    </Button>
                    <Button variant="primary" onClick={handleSave}>
                        Uložit recept
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default RecipeForm;
