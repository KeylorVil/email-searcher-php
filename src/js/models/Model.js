export default class NavModel {
    constructor() {
        this.data = [{
                email: "jonsmith@example.com",
                first_name: "Jon",
                last_name: "Smith",
                description: "Lorem Ipsum Dolor",
                address: "123 Chocolate Ave",
                phone_numbers: ["2125551234", "2125551235", "2125551236"],
                relatives: ["Jane Smith", "Doe Smith"]
            },
            {
                email: "janesmith@example.com",
                first_name: "Jane",
                last_name: "Smith",
                description: "Lorem Ipsum Dolor",
                address: "123 Chocolate Ave",
                phone_numbers: ["2125551234", "2125551235", "2125551236"],
                relatives: ["Jon Smith", "Doe Smith"]
            },
            {
                email: "doesmith@example.com",
                first_name: "Dow",
                last_name: "Smith",
                description: "Lorem Ipsum Dolor",
                address: "123 Chocolate Ave",
                phone_numbers: ["2125551234", "2125551235", "2125551236"],
                relatives: ["Jane Smith", "Jon Smith"]
            }
        ];
    }

    getData = () => {
        return this.data;
    }
}