import NavView from './views/View.js';
import NavModel from './models/Model.js';
import NavController from './controllers/Controller.js';

const navView = new NavView();
const navModel = new NavModel();
const nav = new NavController(navView, navModel);
nav.init();