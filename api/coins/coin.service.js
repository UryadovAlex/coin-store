const pool = require('../../config/database');

module.exports = {
    create: (req, callBack) => {
        pool.query(
                `insert into coins(name, value, year, price, country, metal, shortDescription, fullDescription, quality, weight, obverseLink, reverseLink, coinType)
                                        values(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
            [
                req.body.name,
                req.body.value,
                req.body.year,
                req.body.price,
                req.body.country,
                req.body.metal,
                req.body.shortDescription,
                req.body.fullDescription,
                req.body.quality,
                req.body.weight,
                req.files['obverseLink'][0].filename,
                req.files['reverseLink'][0].filename,
                req.body.coinType,
            ],
            (error, results) => {
                if (error) {
                    return callBack(error);
                }
                return callBack(null, results);
            }
        );
    },
    getCoins: (type, callBack) => {
        pool.query(
                `select id, name, value, year, price, country, metal, shortDescription, fullDescription, quality, weight, obverseLink, reverseLink, coinType from coins where coinType = ?`,
            [type],
            (error, results) => {
                if (error) {
                    return callBack(error);
                }
                return callBack(null, results);
            }
        );
    },
    getCoinById: (id, callBack) => {
        pool.query(
                `select id, name, value, year, price, country, metal, shortDescription, fullDescription, quality, weight, obverseLink, reverseLink, coinType from coins where id = ?`,
            [id],
            (error, results) => {
                if (error) {
                    return callBack(error);
                }
                console.log(results)
                return callBack(null, results);
            }
        );
    },
    updateCoin: (req, id, callBack) => {
        pool.query(
                `update coins set 
                        name=?, value=?, year=?, price=?, country=?, metal=?, shortDescription=?, fullDescription=?, quality=?, 
                        weight=?, obverseLink=?, reverseLink=?, coinType=? where id=?`,
            [
                req.body.name,
                req.body.value,
                req.body.year,
                req.body.price,
                req.body.country,
                req.body.metal,
                req.body.shortDescription,
                req.body.fullDescription,
                req.body.quality,
                req.body.weight,
                req.files['obverseLink'][0].filename,
                req.files['reverseLink'][0].filename,
                req.body.coinType,
                id
            ],
            (error, results) => {
                if (error) {
                    return callBack(error);
                }
                return callBack(null, results);
            }
        );
    },
    deleteCoin: (id, callBack) => {
        pool.query(
                `delete from coins where id=?`,
            [id],
            (error, results) => {
                if (error) {
                    return callBack(error);
                }
                return callBack(null, results);
            }
        );
    },
    searchCoin: (word, callBack) => {
        pool.query(
            `SELECT 
                        *
                    FROM
                        coins
                    WHERE
                        name LIKE '%${word}%' 
                            OR value LIKE '%${word}%'
                            OR year LIKE '%${word}%'
                            OR price LIKE '%${word}%'
                            OR metal LIKE '%${word}%'
                            OR shortDescription LIKE '%${word}%'
                            OR fullDescription LIKE '%${word}%'
                            OR quality LIKE '%${word}%'
                            OR coinType LIKE '%${word}%'`,
            (error, results) => {
                if (error) {
                    return callBack(error);
                }
                return callBack(null, results);
            }
        );
    },
    getDataForFilter: callBack => {
        pool.query(
                `select country, metal, quality from coins;`,
            (error, results) => {
                if (error) {
                    return callBack(error);
                }
                return callBack(null, results);
            }
        );
    },
    getFilteredCoins: (data, callBack) => {
        const fields = ['country=', 'metal=', 'quality=', 'price>=', 'price<=', 'year>=', 'year<='];

        const query = Object.keys(data)
            .map((key, index) => data[key] ? fields[index] + `\'${data[key]}\'` : '')
            .filter(el => el !== '')
            .join(' && ');
        pool.query(
            `SELECT 
                        *
                    FROM
                        bootcamp.coins
                    ${Object.values(data).filter(el => el !== '').length ? 'WHERE ' : ' '} ${query} ;`,
            (error, results) => {
                if (error) {
                    return callBack(error);
                }
                return callBack(null, results);
            }
        );
    },


}