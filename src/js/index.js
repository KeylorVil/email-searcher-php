import View from './views/View.js';
import Model from './models/Model.js';
import Controller from './controllers/Controller.js';
import Card from './components/Card.js';

customElements.define('custom-card', Card);

const view = new View();
const model = new Model();
const controller = new Controller(view, model);
controller.init();