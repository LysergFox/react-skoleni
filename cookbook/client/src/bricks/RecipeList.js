import React, {useMemo, useState} from "react";
import RecipeGridList from "./RecipeGridList";
import RecipeTableList from "./RecipeTableList";

import Form from "react-bootstrap/Form";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";

import Icon from "@mdi/react";
import {mdiMagnify, mdiPlus, mdiTable, mdiViewGridOutline} from "@mdi/js";

import styles from "../css/recipeList.module.css";
import RecipeForm from "./RecipeForm";

function RecipeList(props) {
    const [viewType, setViewType] = useState("grid");
    const [searchBy, setSearchBy] = useState("");
    const [showRecipeModal, setShowRecipeModal] = useState(false);

    const handleOpenRecipeModal = () => {
        setShowRecipeModal(true);
    };

    const filteredRecipeList = useMemo(() => {
        return props.recipeList.filter((item) => {
            return (
                item.name
                    .toLocaleLowerCase()
                    .includes(searchBy.toLocaleLowerCase()) ||
                item.description.toLocaleLowerCase().includes(searchBy.toLocaleLowerCase())
            );
        });
    }, [searchBy, props.recipeList]);

    function handleSearch(event) {
        event.preventDefault();
        setSearchBy(event.target["searchInput"].value);
    }

    function handleSearchDelete(event) {
        if (!event.target.value) setSearchBy("");
    }

    return (
        <div>
            <Navbar collapseOnSelect expand="sm" bg="light">
                <div className="container-fluid">
                    <Navbar.Brand>Seznam receptu</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse style={{ justifyContent: "right" }}>
                        <div>
                            <Form className="d-flex" onSubmit={handleSearch}>
                                <Button
                                    style={{ marginRight: "8px" }}
                                    className={"d-none d-md-block"}
                                    variant="outline-primary"
                                    onClick={handleOpenRecipeModal}
                                >
                                    <Icon size={1} path={mdiPlus} />{" "}
                                    {"Vytvorit recept"}
                                </Button>
                                <Form.Control
                                    id={"searchInput"}
                                    style={{ maxWidth: "150px" }}
                                    type="search"
                                    placeholder="Search"
                                    aria-label="Search"
                                    onChange={handleSearchDelete}
                                />
                                <Button
                                    style={{ marginRight: "8px" }}
                                    variant="outline-success"
                                    type="submit"
                                >
                                    <Icon size={1} path={mdiMagnify} />
                                </Button>
                                <Button
                                    style={{ marginRight: "8px" }}
                                    className={"d-none d-md-block"}
                                    variant="outline-primary"
                                    onClick={() =>
                                        setViewType("grid")
                                    }
                                >
                                    <Icon size={1} path={mdiViewGridOutline} />{" "}
                                    {"Grid"}
                                </Button>
                                <Button
                                    style={{ marginRight: "8px" }}
                                    className={"d-none d-md-block"}
                                    variant="outline-primary"
                                    onClick={() =>
                                        setViewType("grid-small")
                                    }
                                >
                                    <Icon size={1} path={mdiViewGridOutline} />{" "}
                                    {"Grid maly"}
                                </Button>
                                <Button
                                    style={{ marginRight: "8px" }}
                                    className={"d-none d-md-block"}
                                    variant="outline-primary"
                                    onClick={() =>
                                        setViewType("table")
                                    }
                                >
                                    <Icon size={1} path={mdiTable} />{" "}
                                    {"Tabulka"}
                                </Button>
                            </Form>
                        </div>
                    </Navbar.Collapse>
                </div>
            </Navbar>
            <div className={styles.recipeList}>
                {filteredRecipeList.length ? (
                    <div class="container">
                        <div className={"d-block d-md-none"}>
                            <RecipeGridList recipeList={filteredRecipeList} viewType={viewType} ingredientsList={props.ingredientsList}/>
                        </div>
                        <div className={"d-none d-md-block"}>
                            {viewType === "grid" || viewType === "grid-small" ? (
                                <RecipeGridList recipeList={filteredRecipeList} viewType={viewType} ingredientsList={props.ingredientsList}/>
                            ) : (
                                <RecipeTableList recipeList={filteredRecipeList} ingredientsList={props.ingredientsList}/>
                            )}
                        </div>
                    </div>
                ) : (
                    <div style={{ margin: "16px auto", textAlign: "center" }}>
                        Nejsou žádní studenti ke zobrazení
                    </div>
                )}
            </div>
            <RecipeForm
                show={showRecipeModal}
                onHide={() => setShowRecipeModal(false)}
                ingredientsList={props.ingredientsList}
            />
        </div>
    );
}

export default RecipeList;