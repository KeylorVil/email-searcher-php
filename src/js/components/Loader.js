export default class Nav extends HTMLElement {
    /* loader web component */

    constructor() {
        super();
    }

    connectedCallback() {
    /*called when the element is connected to the page*/
        this.attachShadow({
            mode: 'open'
        });

        const _template = document.createElement('div');
        _template.setAttribute('class', 'loader')
        const _style = document.createElement('style');

        /* Shadow dom style */
        _style.innerHTML = `
        @import './src/css/reset.css';
        @import './src/css/components/general.css';
        @import './src/css/components/loader.css';
        `;

        /* Append the card html and style to the shadowdom */
        this.shadowRoot.appendChild(_style);
        this.shadowRoot.appendChild(_template);
    }
}