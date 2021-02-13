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
        @import './src/css/components/cards.css';
        @import './src/css/normalize/sections.css';
        `;

        /* Append the card html and style to the shadowdom */
        this.shadowRoot.appendChild(_style);
        this.shadowRoot.appendChild(_template);
    }

    htmlTemplate() {
        /* destructuring attributes */
        const number = this.getAttribute('number');
        const title = this.getAttribute('title');
        const description = this.getAttribute('description');
        const _template = document.createElement('div');
        _template.setAttribute('class', 'card');

        _template.innerHTML = `
        <div class="number">
            <span>${number}</span>
        </div>
        <div class="right-text">
            <h2>${title}</h2>
            <p>${description}</p>
        </div>
        `;
        return _template;
    }
}