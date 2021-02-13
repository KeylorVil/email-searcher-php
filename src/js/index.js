import MainView from './views/MainView.js';
import MainModel from './models/MainModel.js';
import NavView from './views/NavView.js';
import SearchModel from './models/SearchModel.js';
import Controller from './controllers/Controller.js';
import Nav from './components/Nav.js';
import Card from './components/Card.js';
import Search from './components/Search.js';

/* cards custom element */
customElements.define('custom-card', Card);
/* nav custom element */
customElements.define('custom-nav', Nav);
/* search custom element */
customElements.define('custom-search', Search)


const mainView = new MainView();
const navView = new NavView();
const mainModel = new MainModel();
const searchModel = new SearchModel();
const controller = new Controller({
    MainView: mainView,
    MainModel: mainModel,
    NavView: navView,
    SearchModel: searchModel
});
controller.init();