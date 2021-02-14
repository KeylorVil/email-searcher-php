/* Web Components */
import Nav from '/dist/js/components/Nav.min.js';
import Card from '/dist/js/components/Card.min.js';
import Search from '/dist/js/components/Search.min.js';
import Result from '/dist/js/components/Result.min.js';
import Loader from '/dist/js/components/Loader.min.js';
import Footer from '/dist/js/components/Footer.min.js';
/* Views */
import NavView from '/dist/js/views/NavView.min.js';
import SearchView from '/dist/js/views/SearchView.min.js';
import CardsView from '/dist/js/views/CardsView.min.js';
import FooterView from '/dist/js/views/FooterView.min.js';
/* Models */
import CardsModel from '/dist/js/models/CardsModel.min.js';
import SearchModel from '/dist/js/models/SearchModel.min.js';
/* Controller */
import Controller from '/dist/js/controllers/Controller.min.js';

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