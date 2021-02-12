export default class Nav extends HTMLElement {
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
        span {
            color: var(--span-color);
        }

        .card {
            display: flex;
        }
        
        .card.first-card {
            margin-top: 0px;
        }
        
        .card .number {
            background-color: var(--cards-background-color);
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 50%;
        }
        
        .card .number span {
            font-weight: bold;
        }
        
        .card .right-text h2 {
            font-weight: bold;
            color: var(--title-color);
            letter-spacing: 0;
        }
        
        .card .right-text p {
            color: var(--text-color);
            line-height: 24px;
            margin-top: 8px;
        }

        /*Mobile*/
        .card {
            margin-top: 15px;
        }
    
        .card .number {
            width: 50.4px;
            height: 50.4px;
            min-width: 50.4px;
            margin-right: 10.6px;
        }
    
        .card .number span {
            font-size: 26.88px;
        }
    
        .card .right-text h2 {
            font-size: 20px;
        }
    
        .card .right-text p {
            font-size: 16px;
        }
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