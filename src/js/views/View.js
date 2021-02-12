export default class NavView {
    init(data) {
        this.renderEmailData(data);
    }
    renderEmailData(data) {
        // cache #dataList DOM 
        const $dataListUI = window.dataList;
        // clear HTML from the DOM 
        $dataListUI.innerHTML = '';
        for (let i = 0, len = data.length; i < len; i++) {
            let $li = document.createElement('li');
            $li.setAttribute('class', 'item');
            $li.setAttribute('data-index', i);
            $li.innerHTML = `${data[i]['email']},${data[i]['first_name']},${data[i]['last_name']}`;
            $dataListUI.append($li);
        }
    }
}