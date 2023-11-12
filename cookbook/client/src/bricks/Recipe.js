import React, {useContext, useState} from "react";
import Card from 'react-bootstrap/Card';
import Icon from "@mdi/react";
import { mdiChefHat, mdiText } from "@mdi/js";
import IngredientList from "./IngredientList";
import RecipeForm from "./RecipeForm";
import Button from "react-bootstrap/Button";
import UserContext from "../UserProvider";

function Recipe(props) {
    const [showEditModal, setShowEditModal] = useState(false);
    const { isAuthorized } = useContext(UserContext);

    const handleEditClick = () => {
        if (props.recipe) {
            handleOpenEditModal();
        }
    };

    const handleOpenEditModal = () => {
        setShowEditModal(true);
    };

    if (props.viewType === "grid-small")
        return (
            <Card>
                <Card.Img variant={"top"} src={props.recipe.imgUri}/>
                <Card.Body>
                    <div>
                        <Icon path={mdiChefHat} size={1} color={"grey"}/>{" "}
                        {props.recipe.name}
                    </div>
                    <div>
                        <Icon path={mdiText} size={1} color={"grey"}/>{" "}
                        {props.recipe.description}
                    </div>
                </Card.Body>
            </Card>
        );
    else if (props.viewType === "grid") {
        return (
            <Card>
                <Card.Img variant={"top"} src={props.recipe.imgUri}/>
                <Card.Body>
                    <div>
                        <Icon path={mdiChefHat} size={1} color={"grey"}/>{" "}
                        {props.recipe.name}
                    </div>
                    <div>
                        <Icon path={mdiText} size={1} color={"grey"}/>{" "}
                        {props.recipe.description}
                    </div>
                    <div>
                        <IngredientList
                            ingredientList={props.recipe.ingredients}
                            ingredientsList={props.ingredientsList}
                        />
                    </div>
                    {isAuthorized && (
                        <Button onClick={handleEditClick}>Upravit recept</Button>
                    )}

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
}

export default Recipe;
