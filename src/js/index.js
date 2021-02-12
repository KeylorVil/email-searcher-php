import MainView from './views/MainView.js';
import MainModel from './models/MainModel.js';
import Controller from './controllers/Controller.js';
import Nav from './components/Nav.js';
import Card from './components/Card.js';

/* cards custom element */
customElements.define('custom-card', Card);
/* nav custom element */
customElements.define('custom-nav', Nav);

const view = new MainView();
const model = new MainModel();
const controller = new Controller(view, model);
controller.init();