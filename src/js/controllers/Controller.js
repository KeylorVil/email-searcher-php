export default class Controller {
    constructor({MainView = 0, MainModel = 0, NavView = 0, SearchModel = 0}) {
        this.MainView = MainView;
        this.MainModel = MainModel;
        this.NavView = NavView;
        this.SearchModel = SearchModel;
    }

    async init() {
        let data = await this.MainModel.getData();
        // let foo = await this.SearchModel.getData({email: "doesmith@example.com"});
        this.NavView.init();
        this.MainView.init(data);
    }
}