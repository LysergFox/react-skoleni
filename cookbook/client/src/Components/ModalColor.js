import React from 'react';
import Modal from 'react-bootstrap/Modal';
import './../styles/ModalColorStyle.css';

function ModalComponent(props) {
    const { show, onClose } = props;

    const colorsData = [
        {
            name: 'dark_blue',
            hex: '#40667a',
            rgb: 'rgb(64, 102, 122)',
        },
        {
            name: 'li_blue',
            hex: '#7eb1af',
            rgb: 'rgb(126, 177, 175)',
        },
        {
            name: 'med_blue',
            hex: '#60849a',
            rgb: 'rgb(96, 132, 154)',
        },
        {
            name: 'beige',
            hex: '#e6d8b3',
            rgb: 'rgb(230, 216, 179)',
        },
        {
            name: 'yellow',
            hex: '#dbb05a',
            rgb: 'rgb(219, 176, 90)',
        },
        {
            name: 'orange',
            hex: '#c27947',
            rgb: 'rgb(194, 121, 71)',
        },
        {
            name: 'red',
            hex: '#b94f40',
            rgb: 'rgb(185, 79, 64)',
        },
    ];

    return (
        <div className={show ? 'modal-container' : 'hidden'}>
            <Modal
                show={show}
                onHide={onClose}
                className="modal-container"
            >
                <Modal.Header>
                    <Modal.Title>Color Information</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <ul>
                        {colorsData.map((color) => (
                            <li key={color.name}>
                                <div className="color-box" style={{ backgroundColor: color.hex }}></div>
                                <strong>{color.name}:</strong>
                                <div>
                                    Hex: {color.hex}
                                    <br />
                                    RGB: {color.rgb}
                                </div>
                            </li>
                        ))}
                    </ul>
                    <button onClick={onClose}>Close</button>
                </Modal.Body>
            </Modal>
        </div>
    );
}

export default ModalComponent;
