export default class CardsView {

    init(data) {
        this.render(data);
    }

    render(data) {
        const cards = window.cards;
        /* cleaning dom */
        cards.innerHTML = '';
        let title = document.createElement('h1');
        let text = document.createElement('p');
        title.innerHTML = 'Reverse Email Lookup';
        text.innerHTML = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.';
        cards.appendChild(title);
        cards.appendChild(text);
        cards.appendChild(this.createCards(data));
        cards.style.display = "flex";
    }

    hide() {
        const cards = window.cards;
        cards.style.display = "none";
    }

    show() {
        const cards = window.cards;
        cards.style.display = "block";
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