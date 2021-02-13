export default class Controller {
    constructor
        ({
            SearchView = 0,
            MainView = 0,
            MainModel = 0,
            NavView = 0,
            SearchModel = 0,
            ResultView = 0
        }) {
            this.SearchView = SearchView;
            this.MainView = MainView;
            this.MainModel = MainModel;
            this.NavView = NavView;
            this.SearchModel = SearchModel;
            this.ResultView = ResultView;
        }

    async init() {
        let data = await this.MainModel.getData();
        // let foo = await this.SearchModel.getData({email: "doesmith@example.com"});
        this.NavView.init();
        this.SearchView.init();
        this.MainView.init(data);
        const {
            handleSearch,
            SearchModel,
            ResultView
        } = this;
        this.SearchView.bindSearch({
            handleSearch,
            SearchModel,
            ResultView
        });
    }

    async handleSearch({
        email = 0,
        SearchModel = 0,
        ResultView = 0
    }) {
        let data = await SearchModel.getData(email);
        ResultView.init(data);
    }
}