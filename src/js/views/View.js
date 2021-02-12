export default class NavView {
    init() {
        this.render();
    }

    async render() {
        const main = window.main;
        main.innerHTML = '';
        const cardsData = await this.getCardsData();
        main.appendChild(this.createCards(cardsData))
    }

    async fetchCardsData() {
        const response = await fetch('./src/json/cards.json')
            .then(response => response.json())
        return response;
    }

    async getCardsData() {
        const result = await this.fetchCardsData();
        return result;
    }

    createCards(data) {

        let cards = document.createElement('div');
        cards.setAttribute('class', 'cards');

        let firstColumn = document.createElement('div');
        firstColumn.setAttribute('class', 'col first-col');

        cards.appendChild(firstColumn);

        let customCards = [];
        data.forEach((item, index) => {
            let card = document.createElement('custom-card');
            card.setAttribute('number', index+1);
            card.setAttribute('title', item.title);
            card.setAttribute('description', item.description);
            customCards.push(card);
        });

        customCards.forEach((item) => {
            firstColumn.appendChild(item);
        });
        return cards;
    }
}