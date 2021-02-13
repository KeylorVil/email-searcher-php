/* Web Components */
import Nav from './components/Nav.js';
import Card from './components/Card.js';
import Search from './components/Search.js';

/* MVC */
import NavView from './views/NavView.js';
import SearchView from './views/SearchView.js';
import MainView from './views/MainView.js';
import ResultView from './views/ResultView.js';
import MainModel from './models/MainModel.js';
import SearchModel from './models/SearchModel.js';
import Controller from './controllers/Controller.js';

/* cards custom element */
customElements.define('custom-card', Card);
/* nav custom element */
customElements.define('custom-nav', Nav);
/* search custom element */
customElements.define('custom-search', Search)

const searchView = new SearchView();
const navView = new NavView();
const mainView = new MainView();
const resultView = new ResultView();
const mainModel = new MainModel();
const searchModel = new SearchModel();
const controller = new Controller({
    SearchView: searchView,
    MainView: mainView,
    MainModel: mainModel,
    NavView: navView,
    SearchModel: searchModel,
    ResultView: resultView
});
controller.init();