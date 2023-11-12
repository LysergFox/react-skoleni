import React, { useState } from "react";
import Card from 'react-bootstrap/Card';
import Icon from "@mdi/react";
import { mdiChefHat, mdiText } from "@mdi/js";
import IngredientList from "./IngredientList";
import RecipeForm from "./RecipeForm";
import Button from "react-bootstrap/Button";

function Recipe(props) {
    const [showEditModal, setShowEditModal] = useState(false);

    const handleEditClick = () => {
        if (props.recipe) {
            handleOpenEditModal();
        }
    };

    const handleOpenEditModal = () => {
        setShowEditModal(true);
    };

    return (
        <Card>
            <Card.Img variant={"top"} src={props.recipe.imgUri} />
            <Card.Body>
                <div>
                    <Icon path={mdiChefHat} size={1} color={"grey"} />{" "}
                    {props.recipe.name}
                </div>
                <div>
                    <Icon path={mdiText} size={1} color={"grey"} />{" "}
                    {props.recipe.description}
                </div>
                <div>
                    <IngredientList
                        ingredientList={props.recipe.ingredients}
                        ingredientsList={props.ingredientsList}
                    />
                </div>
                <Button onClick={handleEditClick}>Upravit recept</Button>

                <RecipeForm
                    recipe={props.recipe}
                    showModal={showEditModal}
                    setShowModal={setShowEditModal}
                    ingredientList={props.ingredientsList}
                    handleOpenEditModal={handleOpenEditModal}
                />
            </Card.Body>
        </Card>
    );
}

export default Recipe;
