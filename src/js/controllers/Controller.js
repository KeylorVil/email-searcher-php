export default class NavController {
    constructor(NavView, NavModel) {
        this.NavView = NavView;
        this.NavModel = NavModel;
    }

    init() {
        this.NavView.init();
    }
}