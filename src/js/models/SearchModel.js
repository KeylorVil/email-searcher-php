export default class SearchModel {
    /* Fetch https://ltv-data-api.herokuapp.com/api/v1/records.json?email= with custom email*/
    /* Posible success values: jonsmith@example.com, janesmith@example.com, doesmith@example.com */
    async fetchApi(email) {
        const response = await fetch('./src/php/search.php', {
            method: 'POST',
            body: JSON.stringify(email)
        }).then(response => response.json());
        return response;
    }

    async getData(email) {
        let data = await this.fetchApi(email);
        return data;
    }
}