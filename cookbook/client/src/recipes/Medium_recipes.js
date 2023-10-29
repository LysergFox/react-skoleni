import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import '../styles/RecipeStyles.css';

function Medium_Recipes({ searchTerm }) {
    const [view, setView] = useState('small');

    const toggleView = (newView) => {
        setView(newView);
    };

    const [recipes, setRecipes] = useState([
        {
            id: 1,
            title: 'Salát z naklíčené čočky',
            description: 'Mrkev, okurku a papriku nakrájejte na malé kostičky a dejte do větší mísy spolu s naklíčenou čočkou. Cibuli nakrájejte najemno a přidejte k zelenině. Přisypte nasekanou petrželku. V misce nebo hrníčku důkladně promíchejte lák z okurek, olivový olej a med. Zálivku nalijte do mísy a důkladně promíchejte. Na závěr dochuťte solí a pepřem.',
            image: 'cocka.jpeg',
        },
        {
            id: 2,
            title: 'Placičky',
            description: 'Cibuli oloupejte a nastrouhejte nahrubo. Mrkev důkladně umyjte a nastrouhejte najemno spolu s česnekem. V míse smíchejte vločky, cibuli, mrkev, česnek a koření. Přidejte strouhanku a důkladně promíchejte, ideálně rukou tak, aby vznikla jednotná směs. Pokud je směs příliš suchá, přidejte trošku vody, pokud je příliš mokrá, přidejte trošku strouhanky. Na pánvi rozpalte olej, ze směsi vytvarujte malé placičky a smažte z obou stran dozlatova.',
            image: 'placicky.jpg',
        },
        {
            id: 3,
            title: 'Barbecue burger ze zbylého kuřete',
            description: 'Rozehřejte troubu na 240 °C. Obrané drůbeží maso natrhejte na vlákna, zamíchejte s barbecue omáčkou a rozprostřete do pekáčku. Dejte do trouby a pečte asi 10 minut. Rozpůlené bulky opečte na rozpálené pánvi na sucho z obou stran. Limetu umyjte, nastrouhejte kůru, šťávu vymačkejte a obojí smíchejte s majonézou. Pomocí škrabky udělejte z mrkve tenké proužky. Přendejte je do misky, přidejte špetku soli a pepře a pár kapek limety a promíchejte. Začněte skládat burger. Obě půlky bulek pomažte limetovou majonézou. Na spodní polovinu bulky navrstvěte natrhaný koriandr, na plátky nasekanou chilli papričku, mrkvové proužky, tenká kolečka šalotky a plátek rajčete. Nakonec přidejte vrstvu zapečeného bbq kuřete a plátek cheddaru. Přiklopte vrchní polovinou bulky a podávejte.',
            image: 'burger.png',
        },
    ]);

    const filteredRecipes = recipes.filter(
        (recipe) =>
            recipe.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            recipe.description.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div>
            <div className="card-container">
                {filteredRecipes.map((recipe) => (
                    <Card
                        key={recipe.id}
                        className={view === 'large' ? 'card' : 'small-view'}
                        onClick={() => toggleView(view === 'small' ? 'large' : 'small')}
                    >
                        <Card.Img
                            variant="top"
                            src={recipe.image}
                            className="img"
                        />
                        <Card.Header className="header">{recipe.title}</Card.Header>
                        <Card.Body>
                            <Card.Text className="text">
                                {view === 'large' ? recipe.description : recipe.description.split('.')[0] + '...'}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                ))}
            </div>
        </div>
    );
}

export default Medium_Recipes;
