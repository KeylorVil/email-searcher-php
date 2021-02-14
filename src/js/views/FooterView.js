export default class FooterView {
    init() {
        this.render();
    }

    render() {
        const footer = window.footer;
        footer.innerHTML = '';
        footer.appendChild(document.createElement('custom-footer'));
    }
}