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

        let foo = document.createElement('custom-result');
        foo.setAttribute('info', JSON.stringify(data));
        result.appendChild(foo);
        result.style.display = "flex";
    }
}