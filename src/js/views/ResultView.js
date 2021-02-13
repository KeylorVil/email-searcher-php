export default class ResultView {

    init(data) {
        this.render(data);
    }

    render(data) {
        const result = window.result;
        const main = window.main;
        /* cleaning dom */
        result.innerHTML = '';
        main.innerHTML = '';

        let foo = document.createElement('h1');
        foo.innerHTML = `${data.first_name}`;
        result.appendChild(foo);
    }
}