export default class Search extends HTMLElement {
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
            _template.setAttribute('class', 'form');
    
            _template.innerHTML = `
            <div class="input-div">
                <input id="emailInput" class="input-text" type="text" placeholder="email">
                <label id="labelInput" for="emailInput" class="input-label">email</label>
                <label id="errorLabel" for="emailInput">Please add a valid email address</label>
            </div>
            <input id="searchBtn" type="button" value="go!">
            `;
            return _template;
        }
}