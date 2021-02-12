export default class NavModel {
    /* fetch JSON with Cards title's and description's texts */
    async fetchCardsData() {
        const response = await fetch('./src/json/cards.json')
            .then(response => response.json())
        return response;
    }

    async getData() {
        let data = await this.fetchCardsData();
        return data;
    }
    
}