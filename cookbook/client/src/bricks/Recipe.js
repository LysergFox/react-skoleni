import React from "react";
import Card from 'react-bootstrap/Card';
import Icon from "@mdi/react";
import {mdiChefHat, mdiText} from "@mdi/js";
import IngredientList from "./IngredientList";


function Recipe(props){
    if(props.viewType === "grid-small")
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
    else if (props.viewType === "grid"){
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
                        <IngredientList ingredientList={props.recipe.ingredients}
                                        ingredientsList={props.ingredientsList}/>
                    </div>
                </Card.Body>
            </Card>
        );
    }
}

export default Recipe;