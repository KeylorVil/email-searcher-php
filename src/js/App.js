/* Web Components */
import Nav from './components/Nav.js';
import Card from './components/Card.js';
import Search from './components/Search.js';
import Result from './components/Result.js';
import Loader from './components/Loader.js';
import Footer from './components/Footer.js';
/* Views */
import NavView from './views/NavView.js';
import SearchView from './views/SearchView.js';
import CardsView from './views/CardsView.js';
import FooterView from './views/FooterView.js';
/* Models */
import CardsModel from './models/CardsModel.js';
import SearchModel from './models/SearchModel.js';
/* Controller */
import Controller from './controllers/Controller.js';

/* cards custom element */
customElements.define('custom-card', Card);
/* nav custom element */
customElements.define('custom-nav', Nav);
/* search custom element */
customElements.define('custom-search', Search)
/* email search result custom element */
customElements.define('custom-result', Result);
/* loader custom element */
customElements.define('custom-loader', Loader);
/* footer custom element */
customElements.define('custom-footer', Footer);

/* Views creation */
const searchView = new SearchView();
const navView = new NavView();
const cardsView = new CardsView();
const footerView = new FooterView();
/* Models creation */
const cardsModel = new CardsModel();
const searchModel = new SearchModel();
/* Controller creation, sends models and view as objects so it doesn't matter the order */
const controller = new Controller({
    SearchView: searchView,
    CardsView: cardsView,
    CardsModel: cardsModel,
    NavView: navView,
    SearchModel: searchModel,
    FooterView: footerView
});
/* Controller initialization */
controller.init();