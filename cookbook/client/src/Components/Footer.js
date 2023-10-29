import React from 'react';
import '../styles/AppStyle.css';
function Footer({ toggleColorTheoryModal }) {
    return (
        <footer className="app-footer">
            <button onClick={toggleColorTheoryModal}>Color Theory</button>
        </footer>
    );
}

export default Footer;
