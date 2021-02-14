export default class Result extends HTMLElement {
    /* Email search result web component */

    static get observedAttributes() {
        return ['info'];
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
        @import './dist/css/result.min.css';
        `;

        /* Append the card html and style to the shadowdom */
        this.shadowRoot.appendChild(_style);
        this.shadowRoot.appendChild(_template);
    }

    htmlTemplate() {
        let data = JSON.parse(this.getAttribute('info'));
        // Create Elements
        const _template = document.createElement('div');
        let iconDiv = document.createElement('div');
        let infoDiv = document.createElement('div');
        let row = document.createElement('div');
        // Set Classes
        _template.classList.add('result');
        infoDiv.classList.add('info');
        iconDiv.classList.add('icon');
        row.classList.add('row');
        // Call functions
        this.createProfileIcon(iconDiv);
        this.resultTopInfo(data, infoDiv);
        this.firstColInfo(data, row);
        this.secondColInfo(data, row);
        // Append elements
        infoDiv.appendChild(row);
        _template.appendChild(iconDiv);
        _template.appendChild(infoDiv);

        return _template;
    }

    createProfileIcon(iconDiv) {
        // Create Elements
        let circle = document.createElement('div');
        let img = document.createElement('img');
        img.src = './src/img/icons/icon_person.png';
        // Append elements
        circle.appendChild(img);
        iconDiv.appendChild(circle);
    }

    resultTopInfo(data, infoDiv) {
        // Create Elements
        let nameElem = document.createElement('h2');
        let descriptionElem = document.createElement('p');
        // Dynamic Data
        nameElem.textContent = data.first_name + " " + data.last_name;
        descriptionElem.textContent = data.description;
        // Append elements
        infoDiv.appendChild(nameElem);
        infoDiv.appendChild(descriptionElem);
    }

    firstColInfo(data, row) {
        // Create Elements
        let firstCol = document.createElement('div');
        let address = document.createElement('h3');
        let addressElem = document.createElement('p');
        let email = document.createElement('h3');
        let emailElem = document.createElement('p');
        // Set Classes
        firstCol.classList.add('col');
        firstCol.classList.add('first-col');
        // Static data
        address.textContent = "Address";
        email.textContent = "Email";
        // Dynamic Data
        addressElem.textContent = data.address;
        emailElem.textContent = data.email;
        // Append elements
        firstCol.appendChild(address);
        firstCol.appendChild(addressElem);
        firstCol.appendChild(email);
        firstCol.appendChild(emailElem);
        row.appendChild(firstCol);
    }

    secondColInfo(data, row) {
        // Create Elements
        let secondCol = document.createElement('div');
        let phoneNumbers = document.createElement('h3');
        let relatives = document.createElement('h3');
        // Set Classes
        secondCol.classList.add('col');
        // Static data
        phoneNumbers.textContent = "PhoneNumbers";
        relatives.textContent = "Relatives";
        // Append elements
        secondCol.appendChild(phoneNumbers);
        row.appendChild(secondCol);
        // Dynamic Data
        for (let i in data.phone_numbers) {
            let span = document.createElement('span');
            span.textContent = data.phone_numbers[i];
            if (parseInt(i) === 0)
                span.classList.add('first-number');
            secondCol.appendChild(span);
        }
        secondCol.appendChild(relatives);
        // Dynamic Data
        for (let i in data.relatives) {
            let span = document.createElement('p');
            span.textContent = data.relatives[i];
            if (parseInt(i) === data.relatives.length - 1)
                span.classList.add('last_relative');
            secondCol.appendChild(span);
        }
    }

}