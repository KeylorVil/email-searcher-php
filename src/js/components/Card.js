export default class Nav extends HTMLElement {
    /* cards web component */
    static get observedAttributes() {
        return ['number', 'title', 'description'];
    }

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
        @import './dist/css/reset.min.css';
        @import './dist/css/general.min.css';
        @import './dist/css/cards.min.css';
        `;

        /* Append the card html and style to the shadowdom */
        this.shadowRoot.appendChild(_style);
        this.shadowRoot.appendChild(_template);
    }

    htmlTemplate() {
        const _template = document.createElement('div');
        _template.setAttribute('class', 'card');

        _template.innerHTML = `
        <div class="number">
            <span>${this.getAttribute('number')}</span>
        </div>
        <div class="right-text">
            <h2>${this.getAttribute('title')}</h2>
            <p>${this.getAttribute('description')}</p>
        </div>
        `;
        return _template;
    }
}