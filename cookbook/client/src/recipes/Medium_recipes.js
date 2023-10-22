import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import colors from "../styles/Colors";
function Medium_Recipes() {
    const [shadowStyle, setShadowStyle] = useState({
        x: 0,
        y: 0,
        blur: 1,
        color: 'rgba(0,0,0,0.75)',
    });

    const handleMouseMove = (e) => {
        const { clientX, clientY } = e;
        const { left, top, width, height } = e.target.getBoundingClientRect();

        const xOffset = (clientX - left - width / 2) / (width / 2);
        const yOffset = (clientY - top - height / 2) / (height / 2);

        const x = -xOffset * 10; // Invert x
        const y = -yOffset * 10; // Invert y
        const blur = 5 + Math.abs(xOffset) * 5;
        const color = 'rgba(0, 0, 0, 0.1)';

        setShadowStyle({ x, y, blur, color });
    };

    const cardStyle = {
        border: '5px solid',
        borderColor: colors.li_blue,
        borderRadius: '10px',
        width: '30%',
        height: '67rem',
        margin: '1rem',
        textAlign: 'center',
        backgroundColor: colors.med_blue,
        color: 'white',
        transition: 'box-shadow 0.3s',
        boxShadow: `${shadowStyle.x}px ${shadowStyle.y}px ${shadowStyle.blur}px ${shadowStyle.color}`,

    };

    const headerStyle = {
        backgroundColor: colors.red,
        border: '2px solid',
        borderColor: colors.li_blue,
        borderRadius: '3px',
        color: 'white',
        fontsize: '24px',
        height : '5rem',
        fontSize: '2rem',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        textAlign: 'center',
    };

    const titleStyle = {
        backgroundColor: colors.orange,
        color: 'white',
        border: '2px solid',
        borderColor: colors.li_blue,
        borderRadius: '3px',
        fontSize: '1.5rem',
    };

    const imgStyle = {
        width: '100%',
        height: '15vw',
        objectFit: 'center',
    };

    const textStyle ={
        textAlign: 'left',
        backgroundColor: colors.yellow,
        color: 'black',
        blur: '5px',
        width: '97%',
        fontSize: '1.2rem',
        borderRadius: '5px',
        marginLeft: '8px',

    }

    return (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
            <Card style={cardStyle}>
                <Card.Img variant="top" src="cocka.jpeg" style={imgStyle} />
                <Card.Header style={headerStyle}>Salát z naklíčené čočky</Card.Header>
                <Card.Body>
                    <Card.Title style={titleStyle}>Postup</Card.Title>
                    <Card.Text style={textStyle}>
                        Mrkev, okurku a papriku nakrájejte na malé kostičky a dejte do větší mísy spolu s naklíčenou čočkou. Cibuli nakrájejte najemno a přidejte k zelenině. Přisypte nasekanou petrželku. V misce nebo hrníčku důkladně promíchejte lák z okurek, olivový olej a med. Zálivku nalijte do mísy a důkladně promíchejte. Na závěr dochuťte solí a pepřem.
                    </Card.Text>
                    <Card.Title style={titleStyle}>Ingredience</Card.Title>
                    <Card.Text style={textStyle}>
                        <ul>
                            <li>200 g naklíčené čočky</li>
                            <li>1 mrkev</li>
                            <li>1/2 menší červené cibule</li>
                            <li>1/2 salátové okurky</li>
                            <li>1 červená paprika</li>
                            <li>hrst nasekané petrželky</li>
                            <li>3 lžíce láku z okurek</li>
                            <li>2 lžíce olivového oleje</li>
                            <li>1 lžička medu</li>
                            <li>sůl a pepř</li>
                        </ul>

                    </Card.Text>
                </Card.Body>
            </Card>

            <Card style={cardStyle} onMouseMove={handleMouseMove}>
                <Card.Img variant="top" src="placicky.jpg" style={imgStyle} />
                <Card.Header style={headerStyle}>Salát z naklíčené čočky</Card.Header>
                <Card.Body>
                    <Card.Title style={titleStyle}>Postup</Card.Title>
                    <Card.Text style={textStyle}>
                        Cibuli oloupejte a nastrouhejte nahrubo. Mrkev důkladně umyjte a nastrouhejte najemno spolu s česnekem. V míse smíchejte vločky, cibuli, mrkev, česnek a koření. Přidejte strouhanku a důkladně promíchejte, ideálně rukou tak, aby vznikla jednotná směs. Pokud je směs příliš suchá, přidejte trošku vody, pokud je příliš mokrá, přidejte trošku strouhanky. Na pánvi rozpalte olej, ze směsi vytvarujte malé placičky a smažte z obou stran dozlatova.                    </Card.Text>
                    <Card.Title style={titleStyle}>Ingredience</Card.Title>
                    <Card.Text style={textStyle}>
                        <ul>
                            <li>2 hrnky ovesných vloček</li>
                            <li>2 větší cibule</li>
                            <li>2 středně velké mrkve, případně i jiná zelenina (cuketa, celer, řepa...)</li>
                            <li>4 vrchovaté lžíce strouhanky</li>
                            <li>2 větší stroužky česneku</li>
                            <li>1 lžička drceného kmínu</li>
                            <li>1 lžička sladké papriky</li>
                            <li>1 lžička sušených bylinek (majoránka, oregano...)</li>
                            <li>1 necelá lžička soli</li>
                            <li>1/4 lžičky pepře</li>
                            <li>olej na smažení</li>
                        </ul>
                    </Card.Text>
                </Card.Body>
            </Card>

            <Card style={cardStyle}>
                <Card.Img variant="top" src="burger.png" style={imgStyle} />
                <Card.Header style={headerStyle}>Barbecue burger ze zbylého kuřete</Card.Header>
                <Card.Body>
                    <Card.Title style={titleStyle}>Postup</Card.Title>
                    <Card.Text style={textStyle}>
                        Rozehřejte troubu na 240 °C. Obrané drůbeží maso natrhejte na vlákna, zamíchejte s barbecue omáčkou a rozprostřete do pekáčku. Dejte do trouby a pečte asi 10 minut. Rozpůlené bulky opečte na rozpálené pánvi na sucho z obou stran. Limetu umyjte, nastrouhejte kůru, šťávu vymačkejte a obojí smíchejte s majonézou. Pomocí škrabky udělejte z mrkve tenké proužky. Přendejte je do misky, přidejte špetku soli a pepře a pár kapek limety a promíchejte. Začněte skládat burger. Obě půlky bulek pomažte limetovou majonézou. Na spodní polovinu bulky navrstvěte natrhaný koriandr, na plátky nasekanou chilli papričku, mrkvové proužky, tenká kolečka šalotky a plátek rajčete. Nakonec přidejte vrstvu zapečeného bbq kuřete a plátek cheddaru. Přiklopte vrchní polovinou bulky a podávejte.                    </Card.Text>
                    <Card.Title style={titleStyle}>Ingredience</Card.Title>
                    <Card.Text style={textStyle}>
                        <ul>
                            <li>400 g obraného kuřete</li>
                            <li>4 světlé burger bulky</li>
                            <li>100 g čedaru</li>
                            <li>1 šalotka</li>
                            <li>snítka koriandru</li>
                            <li>80 ml barbecue omáčky</li>
                            <li>1 mrkev</li>
                            <li>1 rajče</li>
                            <li>1 limeta</li>
                            <li>2 čerstvé chilli papričky</li>
                            <li>2 lžíce olivového oleje</li>
                        </ul>

                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
}

export default Medium_Recipes;
