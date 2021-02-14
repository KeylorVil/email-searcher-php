export default class Footer extends HTMLElement {
    /* Footer web component */
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
        @import '/dist/css/footer.min.css';
        `;

        /* Append the card html and style to the shadowdom */
        this.shadowRoot.appendChild(_style);
        this.shadowRoot.appendChild(_template);
    }

    htmlTemplate() {
        const _template = document.createElement('div');
        _template.setAttribute('class', 'footer');
        _template.innerHTML = `
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        <span>Terms | Privacy</span>
        `;
        return _template;
    }
}