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
        handleSearch = 0,
        SearchModel = 0,
        ResultView = 0,
        SearchView = 0
    }) {
        const handler = handleSearch;
        let button = document.querySelector('custom-search').shadowRoot.querySelector('#searchBtn');
        button.addEventListener('click', e => {
            e.preventDefault;
            let emailText = document.querySelector('custom-search').shadowRoot.querySelector('#emailInput');
            let email = {
                email: emailText.value
            };
            handler({
                email,
                SearchModel,
                ResultView,
                SearchView
            });
        });
    }

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