export default class Nav extends HTMLElement {
    /* nav web component */
    constructor() {
        super();
    }

    connectedCallback() {
        /*called when the element is connected to the page*/
        this.attachShadow({
            mode: 'open'
        });

        const _template = this.htmlTemplate();
        const _style = document.createElement('style');

        /* Shadow dom style */
        _style.innerHTML = `
        @import '/dist/css/reset.min.css';
        @import '/dist/css/general.min.css';
        @import '/dist/css/nav.min.css';
        `;

        /* Append the card html and style to the shadowdom */
        this.shadowRoot.appendChild(_style);
        this.shadowRoot.appendChild(_template);
    }

    htmlTemplate() {
        const _template = document.createElement('div');
        _template.setAttribute('class', 'nav');
        _template.innerHTML = `
        <a href="/"><img class="logo" src="/dist/img/icons/logo.png" alt="logo"></a>
        <ul>
            <li><a href="#"><img class="nav-icon first" src="/dist/img/icons/icon_search.png" alt="search"></a></li>
            <li><a href="#"><img class="nav-icon" src="/dist/img/icons/icon_person.png" alt="person"></a></li>
        </ul>
        `;
        return _template;
    }

}