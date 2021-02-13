export default class Controller {
    constructor
        ({
            SearchView = 0,
            CardsView = 0,
            CardsModel = 0,
            NavView = 0,
            SearchModel = 0,
            ResultView = 0
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
        const {
            handleSearch,
            SearchModel,
            ResultView,
            SearchView
        } = this;
        this.SearchView.bindSearch({
            handleSearch,
            SearchModel,
            ResultView,
            SearchView
        });
    }

    async handleSearch({
        email = 0,
        SearchModel = 0,
        ResultView = 0,
        SearchView = 0
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