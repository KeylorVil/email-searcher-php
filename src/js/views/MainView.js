export default class MainView {
    init(data) {
        this.render(data);
    }

    render(data) {
        const main = window.main;
        main.innerHTML = '';
        main.appendChild(this.createCards(data))
    }

    createCards(data) {
        /* Create HTML for cards */
        let cards = document.createElement('div');
        cards.setAttribute('class', 'cards');

        let column = document.createElement('div');
        column.setAttribute('class', 'col');

        cards.appendChild(column);

        /* Creates several cards based on /json/cards.json information */
        let customCards = [];
        data.forEach((item, index) => {
            let card = document.createElement('custom-card');
            card.setAttribute('number', index+1);
            card.setAttribute('title', item.title);
            card.setAttribute('description', item.description);
            customCards.push(card);
        });

        /* Append all the cards on a .col element */
        customCards.forEach((item) => {
            column.appendChild(item);
        });
        return cards;
    }
}