export default class SearchView {

    init(formText) {
        this.render(formText);
    }

    render(formText) {
        const search = window.search;
        /* cleaning dom */
        search.innerHTML = '';
        const searchForm = document.createElement('custom-search');
        searchForm.setAttribute('title', formText.title);
        searchForm.setAttribute('span', formText.span);
        searchForm.setAttribute('text', formText.text);
        search.appendChild(searchForm);
    }

    bindSearch({
        handleSearch,
        SearchModel,
        ResultView,
        SearchView
    }) {
        /* Binds Event with controller handler */

        const handler = handleSearch;
        let button = document.querySelector('custom-search').shadowRoot.querySelector('#searchBtn');
        button.addEventListener('click', e => {
            e.preventDefault;
            let emailText = document.querySelector('custom-search').shadowRoot.querySelector('#emailInput').value;
            if (emailText !== '' && this.validateEmail(emailText)) {
                document.querySelector('custom-search').shadowRoot.querySelector('#emailInput').classList.remove('error');
                document.querySelector('custom-search').shadowRoot.querySelector('#labelInput').style.visibility = 'visible';
                document.querySelector('custom-search').shadowRoot.querySelector('#errorLabel').style.visibility = 'hidden';
                let email = {
                    email: emailText
                };
                handler({
                    email,
                    SearchModel,
                    ResultView,
                    SearchView
                });
            } else {
                document.querySelector('custom-search').shadowRoot.querySelector('#emailInput').classList.add('error');
                document.querySelector('custom-search').shadowRoot.querySelector('#labelInput').style.visibility = 'hidden';
                document.querySelector('custom-search').shadowRoot.querySelector('#errorLabel').style.visibility = 'visible';
            }
        });
    }

    validateEmail(email) {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    };

    setText(formText) {
        /* this functions changes the search section copies */
        /* set new title */
        document.querySelector('custom-search').shadowRoot.querySelector('#searchTitle').innerHTML = formText.title;
        /* set new text */
        let text = document.querySelector('custom-search').shadowRoot.querySelector('#searchText');
        text.innerHTML = formText.text;
        /* creates and prepend span */
        let span = document.createElement('span');
        span.innerHTML = formText.span;
        text.prepend(span);
    }
}