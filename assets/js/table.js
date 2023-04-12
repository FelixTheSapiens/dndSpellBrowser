class Table {
    constructor(storedData) {
        this.storedData = storedData;
    }

    getByName(name) {
        let result = alasql(`SELECT * FROM ? WHERE (lower(name) LIKE '%${name}%')`,[this.storedData]);
        return result;
    }
}