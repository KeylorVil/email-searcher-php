export default class MainView {
    
    init(data) {
        this.render(data);
    }

    render(data) {
        const main = window.main;
        main.innerHTML = '';
        main.appendChild(document.createElement('custom-search'));
        main.appendChild(this.createCards(data));
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
            card.setAttribute('number', index+1);
            card.setAttribute('title', item.title);
            card.setAttribute('description', item.description);
            if (index < data.length/2) {
                firstColumn.appendChild(card);
            } else {
                secondColumn.appendChild(card);
            }
        });
        return cards;
    }

    bindSearch(handler, model) {
        let button = document.querySelector('custom-search').shadowRoot.querySelector('#searchBtn');
        button.addEventListener('click', e => {
            e.preventDefault;
            let emailText = document.querySelector('custom-search').shadowRoot.querySelector('#emailInput');
            let email = {email: emailText.value};
            handler(email, model);
        })
    }
}