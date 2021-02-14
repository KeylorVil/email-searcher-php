export default class ResultView {

    init(data) {
        this.render(data);
    }

    render(data) {
        const result = window.result;
        const cards = window.cards;
        /* cleaning dom */
        result.innerHTML = '';
        cards.innerHTML = '';
        
        let header = document.createElement('h1');
        let text = document.createElement('p'); 
        /* checks if object is empty */
        if(Object.keys(data).length === 0) {
            header.innerHTML = '0 Results';
            text.innerHTML = 'Try starting a new search below';
        } else {
            header.innerHTML = '1 Result';
            text.innerHTML = 'Look at the result below to see the details of the person you’re searched for.';
            let resultElement = document.createElement('custom-result');
            resultElement.setAttribute('info', JSON.stringify(data));
            result.appendChild(resultElement);
        }
        let textDiv = document.createElement('div');
        textDiv.setAttribute('class', 'resultCopy');
        textDiv.appendChild(header);
        textDiv.appendChild(text);
        result.prepend(textDiv);
        result.style.display = "flex";
    }
}