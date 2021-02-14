import ResultView from '../views/ResultView.js';
import LoaderView from '../views/LoaderView.js';

export default class Controller {
    /* receives views and models as objects so it doesn't matter the order */
    constructor({
        SearchView,
        CardsView,
        CardsModel,
        NavView,
        SearchModel,
        FooterView
    }) {
        this.SearchView = SearchView;
        this.CardsView = CardsView;
        this.CardsModel = CardsModel;
        this.NavView = NavView;
        this.SearchModel = SearchModel;
        this.FooterView = FooterView;
    }

    /* Initialization */
    async init() {
        let data = await this.CardsModel.getData();
        this.NavView.init();
        let formText = {
            title: "Search Any Email Address",
            span: "Start Here",
            text: " - Look up the owner's name, photos and online profiles. See what you find!"
        }
        this.SearchView.init(formText);
        this.CardsView.init(data);
        this.FooterView.init();

        /* destructuring "this." */
        const {
            handleSearch,
            SearchModel,
            SearchView,
            CardsView
        } = this;
        /* sends model and views because handleSearch is losing scope of "this" */
        this.SearchView.bindSearch({
            handleSearch,
            SearchModel,
            SearchView,
            CardsView
        });
    }

    async handleSearch({
        email,
        SearchModel,
        SearchView,
        CardsView
    }) {
        /* Hide search and cards section */
        SearchView.hide();
        CardsView.hide();
        /* Loader */
        let loaderView = new LoaderView();
        loaderView.init();
        /* Request API */
        let data = await SearchModel.getData(email);
        /* Search section new copy */
        let formText = {
            title: "Can’t Find The Right Person?",
            span: "Try Again",
            text: " - Make a new search"
        }
        SearchView.setText(formText);
        new ResultView().init(data);
        loaderView.clean();
        SearchView.show();
    }
}