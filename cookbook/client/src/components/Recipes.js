import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import '../styles/RecipeStyles.css';

function Recipes(props) {
    const [view, setView] = useState('small');
    const ingredients = props.ingredients;
    let ingredientName = '';
    const toggleView = (newView) => {
        setView(newView);
    };

    const filteredRecipes = props.recipes.filter(
        (recipes) =>
            recipes.name.toLowerCase().includes(props.searchTerm.toLowerCase()) ||
            recipes.description.toLowerCase().includes(props.searchTerm.toLowerCase()) ||
            recipes.ingredients.some((ingredient) => findIngredient(ingredient.id).name.toLowerCase().includes(props.searchTerm.toLowerCase())
            ));

    function findIngredient(id) {
        ingredientName = ingredients.find(item => item.id === id);
        return ingredientName;
    }

    if (props.viewMode === 'table') {
        return (
            <div>
                <table>
                    <thead>
                    <tr>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Ingredients</th>
                    </tr>
                    </thead>
                    <tbody>
                    {filteredRecipes.map((recipes) => (
                        <tr key={recipes.id}>
                            <td>{recipes.name}</td>
                            <td>{recipes.description || 'No description available'}</td>
                            <td>
                                <ul>
                                    {recipes.ingredients.map((ingredient) => (
                                        <li key={ingredient.id}>
                                            {findIngredient(ingredient.id).name}{' '}
                                            {ingredient.amount}{' '}
                                            {ingredient.unit}
                                        </li>
                                    ))}
                                </ul>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        );
    }

    return (
        <div>
            <div className="card-container">
                {filteredRecipes.map((recipes) => (
                    <Card
                        key={recipes.id}
                        className={view === 'large' ? 'card' : 'small-view'}
                        onClick={() => toggleView(view === 'small' ? 'large' : 'small')}
                    >
                        <Card.Img
                            variant="top"
                            src={recipes.imgUri}
                            className="img"
                        />
                        <Card.Header className="header">{recipes.name}</Card.Header>
                        <Card.Body>
                            <Card.Text className="text">
                                {recipes.description ? (
                                    view === 'large'
                                        ? recipes.description
                                        : recipes.description.split('.')[0] + '...'
                                ) : (
                                    'No description available'
                                )}
                            </Card.Text>
                            {props.viewMode === 'table' && (
                                <table>
                                    <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Amount</th>
                                        <th>Unit</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {recipes.ingredients.map((ingredient) => (
                                        <tr key={ingredient.id}>
                                            <td>{findIngredient(ingredient.id).name}</td>
                                            <td>{ingredient.amount}</td>
                                            <td>{ingredient.unit}</td>
                                        </tr>
                                    ))}
                                    </tbody>
                                </table>
                            )}
                            {props.viewMode === 'cards' && view === 'large' && (
                                <Card.Text className="text">
                                    {recipes.ingredients.map((ingredient) => (
                                        <div key={ingredient.id}>
                                            <li>
                                                {findIngredient(ingredient.id).name}{' '}
                                                {ingredient.amount}{' '}
                                                {ingredient.unit}
                                            </li>
                                        </div>
                                    ))}
                                </Card.Text>
                            )}
                        </Card.Body>
                    </Card>
                ))}
            </div>
        </div>
    );
}

export default Recipes;
