export default class NavView {
    init() {
        this.render();
    }

    render() {
        const nav = window.nav;
        nav.innerHTML = '';
        nav.appendChild(document.createElement('custom-nav'));
    }
}