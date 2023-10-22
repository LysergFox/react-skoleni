import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import React from "react";

function Small_Recipes() {
    const cardStyle = {
        border: '1px solid #007bff',
        width: '18rem',
        margin: '1rem',
        textAlign: 'center',
    };

    const headerStyle = {
        backgroundColor: '#007bff',
        color: 'white',
    };

    const bodyStyle = {
        backgroundColor: '#3f99ff',
        color: 'white',
    }

    const imgStyle = {
        width: '100%',
        height: '15vw',
        objectFit: 'cover',
    }

    return (
        <Card style={cardStyle}>
            <Card.Img variant="top" src="logo192.png" style={imgStyle} />
            <Card.Body style={bodyStyle}>
                <Card.Title style={headerStyle}>Card Title</Card.Title>
                <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card>
    );
}

export default Small_Recipes;