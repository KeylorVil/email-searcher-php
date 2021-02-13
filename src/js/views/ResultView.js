export default class ResultView {

    init(data) {
        this.render(data);
    }

    render(data) {
        const result = window.result;
        const cards = window.cards;
        /* cleaning dom */
        result.innerHTML = '';
        cards.innerHTML = '';

        let foo = document.createElement('h1');
        foo.innerHTML = `${data.first_name}`;
        result.appendChild(foo);
    }
}