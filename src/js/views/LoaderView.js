export default class LoaderView {
    
    init() {
        this.render();
    }

    render() {
        const main = document.querySelector('.main');
        const loader = window.loader;
        loader.style.width = `${main.offsetWidth}px`;
        loader.style.height = `${main.offsetHeight}px`;
        loader.appendChild(document.createElement('custom-loader'));
        loader.style.display = "block";
    }

    clean() {
        /* cleans #loader */
        const loader = window.loader;
        loader.style.display = "none";
        loader.innerHTML = '';
    }
}