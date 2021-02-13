export default class Search extends HTMLElement {
    /* search web component */

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
        const _template = document.createElement('div');
        _template.setAttribute('class', 'search-section');

        _template.innerHTML = `
        <div class="top-text">
            <h1>Search Any Email Address</h1>
            <p><span>Start Here</span> - Look up the owner's name, photos and online profiles. See what you find!</p>
        </div>
        <div class="input-section">
            <div class="form">
                <div class="input-div">
                    <input id="emailInput" class="input-text" type="text" placeholder="email">
                    <label id="labelInput" for="emailInput" class="input-label">email</label>
                    <label id="errorLabel" for="emailInput">Please add a valid email address</label>
                </div>
                <input id="searchBtn" type="button" value="go!">
            </div>
            <div class="bottom-text">
                <img class="icon" src="./src/img/icons/icon_lock.png" alt="lock">
                <p>Enter Any Email Address. They won't be notified</p>
            </div>
        </div>
            `;
        return _template;
    }
}