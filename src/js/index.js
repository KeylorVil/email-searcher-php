import View from './views/View.js';
import Model from './models/Model.js';
import Controller from './controllers/Controller.js';
import Card from './components/Card.js';

const view = new View();
const model = new Model();
const controller = new Controller(view, model);
// controller.init();

customElements.define('custom-card', Card);