export default class CardsView {

    init(data) {
        this.render(data);
    }

    render(data) {
        const cards = window.cards;
        /* cleaning dom */
        cards.innerHTML = '';
        cards.appendChild(this.createCards(data));
    }

    createCards(data) {
        /* Create HTML for cards */
        let cards = document.createElement('div');
        cards.setAttribute('class', 'cards');

        let firstColumn = document.createElement('div');
        let secondColumn = document.createElement('div');
        firstColumn.setAttribute('class', 'col first-col');
        secondColumn.setAttribute('class', 'col second-col');

        cards.appendChild(firstColumn);
        cards.appendChild(secondColumn);

        /* Creates several cards based on /json/cards.json information */
        data.forEach((item, index) => {
            let card = document.createElement('custom-card');
            card.setAttribute('number', index + 1);
            card.setAttribute('title', item.title);
            card.setAttribute('description', item.description);
            if (index < data.length / 2) {
                firstColumn.appendChild(card);
            } else {
                secondColumn.appendChild(card);
            }
        });
        return cards;
    }
}