import React from 'react';
import '../styles/AppStyle.css'
import Button from "react-bootstrap/Button";
import {Image} from "react-bootstrap";

function Header({ searchTerm, onSearch, toggleViewMode }) {
    return (
        <header className="app-header">
            <h1 className="app-title">Rádoby kuchařka</h1>
            <Button className="button-view" onClick={toggleViewMode}><Image src={process.env.PUBLIC_URL + '/view.png'} alt="ToggleView" className="icon-view"></Image></Button>
            <input
                type="text"
                placeholder="Search Recipes"
                value={searchTerm}
                onChange={onSearch}
                className={'search-bar'}
            />
        </header>
    );
}

export default Header;
