export default class Controller {
    constructor({MainView = 0, MainModel = 0, NavView = 0}) {
        this.MainView = MainView;
        this.MainModel = MainModel;
        this.NavView = NavView;
    }

    async init() {
        let data = await this.MainModel.getData();
        this.NavView.init();
        this.MainView.init(data);
    }
}