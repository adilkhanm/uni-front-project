class Product {
    static _genId = 1;

    constructor(name, price, category, url, details, id = 0) {
        this.name = name;
        this.price = price;
        this.category = category;
        this.url = url;
        this.details = details;

        if (id == 0) {
            this._id = Product._genId;
            Product._genId++;
        } else {
            this._id = id;
        }
    }
}