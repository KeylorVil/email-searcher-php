import MainView from './views/MainView.js';
import MainModel from './models/MainModel.js';
import NavView from './views/NavView.js';
import Controller from './controllers/Controller.js';
import Nav from './components/Nav.js';
import Card from './components/Card.js';

/* cards custom element */
customElements.define('custom-card', Card);
/* nav custom element */
customElements.define('custom-nav', Nav);

const mainView = new MainView();
const navView = new NavView();
const mainModel = new MainModel();
const controller = new Controller
    ({
        MainView: mainView, 
        MainModel: mainModel, 
        NavView: navView
    });
controller.init();