import React from 'react';
import '../styles/AppStyle.css'

function Header({ searchTerm, onSearch }) {
    return (
        <header className="app-header">
            <h1 className="app-title">Rádoby kuchařka</h1>
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
