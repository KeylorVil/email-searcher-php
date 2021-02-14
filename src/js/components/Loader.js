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

        /* I tried using src/image/loading_spinner.gif but since it's not transparent it looks bad */
        const _template = this.htmlTemplate();
        const _style = document.createElement('style');

        /* Shadow dom style */
        _style.innerHTML = `
        @import '/dist/css/reset.min.css';
        @import '/dist/css/general.min.css';
        @import '/dist/css/loader.min.css';
        `;

        /* Append the card html and style to the shadowdom */
        this.shadowRoot.appendChild(_style);
        this.shadowRoot.appendChild(_template);
    }

    htmlTemplate() {
        const _template = document.createElement('div');
        _template.setAttribute('class', 'loading');
        const loader = document.createElement('div');
        loader.setAttribute('class', 'loader')
        _template.innerHTML = `
        <h2 class="label">Please wait a moment...</h2>
        `;
        _template.prepend(loader);
        return _template;
    }
}