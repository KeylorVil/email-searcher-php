export default class Nav extends HTMLElement {

    static get observedAttributes() {
        return ['number', 'title', 'description'];
    }

    constructor() {
        super();
    }

    connectedCallback() {
        /*called when the element is connected to the page*/
        let template = this.htmlTemplate();
        // this.appendChild(clone);
        this.attachShadow({
            mode: 'open'
        });
        this.shadowRoot.appendChild(template);
    }

    htmlTemplate() {
        const number = this.getAttribute('number');
        const title = this.getAttribute('title');
        const description = this.getAttribute('description');
        const template = document.createElement('element');
        
        template.innerHTML = `
        <div class="card">
            <div class="number">
                <span>${number}</span>
            </div>
            <div class="right-text">
                <h2>${title}</h2>
                <p>${description}</p>
            </div>
        </div>
        `;
        return template;
    }
}