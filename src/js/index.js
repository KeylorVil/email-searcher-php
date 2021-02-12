import MainView from './views/MainView.js';
import MainModel from './models/MainModel.js';
import Controller from './controllers/Controller.js';
import Card from './components/Card.js';

/* cards web component */
customElements.define('custom-card', Card);

const view = new MainView();
const model = new MainModel();
const controller = new Controller(view, model);
controller.init();