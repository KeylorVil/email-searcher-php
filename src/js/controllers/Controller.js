export default class Controller {
    constructor(NavView, NavModel) {
        this.NavView = NavView;
        this.NavModel = NavModel;
    }

    async init() {
        let data = await this.NavModel.getData();
        this.NavView.init(data);
    }
}