const {
    create,
    getCoinById,
    getCoins,
    updateCoin,
    deleteCoin,
    searchCoin,
    getDataForFilter,
    getFilteredCoins
} = require('./coin.service');

module.exports = {
    createCoin: (req, res) => {
        console.log(req.file)
        create(req, (err, results) => {
            if (err) {
                console.log(err);
                return res.status(500).json({
                    success: 0,
                    error: err.errno
                });
            }
            return res.status(200).json({
                success: 1,
                id: results.insertId
            });
        });
    },
    getCoinById: (req, res) => {
        const id = req.params.id;
        getCoinById(id, (err, results) => {
            if (err) {
                console.log(err);
                return;
            }
            if (!results) {
                return res.json({
                    success: 0,
                    message: 'Record not found'
                });
            }
            return res.json({
                success: 1,
                data: results
            });
        });
    },
    getCoins: (req, res) => {
        const type = req.params.type;
        getCoins(type, (err, results) => {
            if (err) {
                console.log(err);
                return;
            }
            return res.json({
                success: 1,
                data: results
            });
        });
    },
    updateCoin: (req, res) => {
        const id = req.params.id;

        updateCoin(req, id, (err, results) => {
            if (err) {
                console.log(err);
                return;
            }
            if (!results.affectedRows) {
                return res.status(200).json({
                    success: 0,
                    message: "No such coin!"
                });
            }
            return res.status(200).json({
                success: 1,
                message: "Updated successfully!"
            });
        });
    },
    deleteCoin: (req, res) => {
        const id = req.params.id;
        ;
        deleteCoin(id, (err, results) => {
            if (err) {
                console.log(err);
                return;
            }
            if (!results) {
                return res.json({
                    success: 0,
                    message: 'Record not found'
                });
            }
            return res.status(200).json({
                success: 1,
                message: 'Coin deleted successfully'
            });
        });
    },
    searchCoin: (req, res) => {
        const word = req.query.search;
        searchCoin(word, (err, results) => {
            if (err) {
                console.log(err);
                return;
            }
            return res.json({
                success: 1,
                data: results
            });
        });
    },
    getDataForFilter: (req, res) => {
        getDataForFilter((err, results) => {
            if (err) {
                console.log(err);
                return;
            }
            const filteredData = results.reduce((acc, el) => {
                if(!acc.country.includes(el.country)) acc.country.push(el.country);
                if(!acc.metal.includes(el.metal.toLowerCase())) acc.metal.push(el.metal.toLowerCase());
                if(!acc.quality.includes(el.quality)) acc.quality.push(el.quality);
                return acc;
            }, {
                country: [],
                metal: [],
                quality: [],
            });
            return res.json({
                success: 1,
                data: filteredData
            });
        });
    },
    getFilteredCoins: (req, res) => {
        const body = req.body;
        console.log(body)
        getFilteredCoins(body, (err, results) => {
            if (err) {
                console.log(err);
                return;
            }
            return res.json({
                success: 1,
                data: results
            });
        });
    },
}