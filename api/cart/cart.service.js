const pool = require('../../config/database');

module.exports = {
    add: (data, callBack) => {
        pool.query(
            `insert into cart(qty, userId, coinId) values(?, ?, ?)`,
            [
                1,
                data.userId,
                data.coinId,
            ],
            (error, results) => {
                if (error){
                    return callBack(error);
                }
                console.log(results)
                return callBack(null, results);
            }
        );
    },
    getCartById: (id, callBack) => {
        pool.query(
            `SELECT * FROM coins INNER JOIN cart ON coins.id = cart.coinId where cart.userId = ?`,
            [id],
            (error, results) => {
                if (error) {
                    return callBack(error);
                }
                return callBack(null, results);
            }
        );
    },
    updateCart: (data, id, callBack) => {
        pool.query(
            `update cart set  qty=? where coinId=?`,
            [
                data.qty,
                id
            ],
            (error, results) => {
                if (error){
                    return callBack(error);
                }
                return callBack(null, results);
            }
        );
    },
    deleteCart: (id, callBack) => {
        pool.query(
            `delete from cart where coinId=?`,
            [id],
            (error, results) => {
                console.log(id)
                if (error){
                    return callBack(error);
                }
                return callBack(null, results);
            }
        );
    }
}