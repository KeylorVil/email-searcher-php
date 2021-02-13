export default class SearchView {

    init() {
        this.render();
    }

    render() {
        const search = window.search;
        /* cleaning dom */
        search.innerHTML = '';
        const searchForm = document.createElement('custom-search');
        search.appendChild(searchForm);
    }

    bindSearch({
        handleSearch = 0,
        SearchModel = 0,
        ResultView = 0
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
                ResultView
            });
        });
    }

}