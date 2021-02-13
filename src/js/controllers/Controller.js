export default class Controller {
    constructor({
        SearchView,
        CardsView,
        CardsModel,
        NavView,
        SearchModel,
        ResultView
    }) {
        this.SearchView = SearchView;
        this.CardsView = CardsView;
        this.CardsModel = CardsModel;
        this.NavView = NavView;
        this.SearchModel = SearchModel;
        this.ResultView = ResultView;
    }

    async init() {
        let data = await this.CardsModel.getData();
        // let foo = await this.SearchModel.getData({email: "doesmith@example.com"});
        this.NavView.init();
        let formText = {
            title: "Search Any Email Address",
            span: "Start Here",
            text: " - Look up the owner's name, photos and online profiles. See what you find!"
        }
        this.SearchView.init(formText);
        this.CardsView.init(data);

        /* destructuring this */
        const {
            handleSearch,
            SearchModel,
            ResultView,
            SearchView
        } = this;
        /* sends model and views because handleSearch is losing scope of "this" */
        this.SearchView.bindSearch({
            handleSearch,
            SearchModel,
            ResultView,
            SearchView
        });
    }

    async handleSearch({
        email,
        SearchModel,
        ResultView,
        SearchView
    }) {
        let data = await SearchModel.getData(email);
        let formText = {
            title: "Can’t Find The Right Person?",
            span: "Try Again",
            text: " - Make a new search"
        }
        SearchView.setText(formText);
        ResultView.init(data);
    }
}