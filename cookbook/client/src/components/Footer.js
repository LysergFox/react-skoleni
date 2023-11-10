import React from 'react';
import '../styles/AppStyle.css';
import {Image} from "react-bootstrap";
function Footer({ toggleColorTheoryModal }) {
    return (
        <footer className="app-footer">
            <button onClick={toggleColorTheoryModal} className="button-pallete"><Image src={process.env.PUBLIC_URL + '/pallete.png'} alt="Pallete" className="icon-pallete"></Image></button>
            <h3 className="copyright">@Vocetka-Jan</h3>
        </footer>
    );
}

export default Footer;
