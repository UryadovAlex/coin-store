const pool = require('../../config/database');

module.exports = {
    create: (data, callBack) => {
        pool.query(
            `insert into users(firstName, lastName, gender, email, password)
                                        values(?, ?, ?, ?, ?)`,
            [
                data.firstName,
                data.lastName,
                data.gender,
                data.email,
                data.password,
            ],
            (error, results) => {
                if (error){
                    return callBack(error);
                }
                return callBack(null, results);
            }
        );
    },
    getUsers: callBack => {
        pool.query(
            `select id, firstName, lastName, gender, email from users`,
            [],
            (error, results) => {
                if (error) {
                    return callBack(error);
                }
                return callBack(null, results);
            }
        );
    },
    getUserById: (id, callBack) => {
        pool.query(
            `select id, firstName, lastName, gender, email, isAdmin from users where id = ?`,
            [id],
            (error, results) => {
                if (error) {
                    return callBack(error);
                }
                return callBack(null, results);
            }
        );
    },
    updateUser: (data, id, callBack) => {
        pool.query(
            `update users set firstName=?, lastName=?, gender=?, email=?, password=? where id=?`,
            [
                data.firstName,
                data.lastName,
                data.gender,
                data.email,
                data.password,
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
    deleteUser: (id, callBack) => {
        pool.query(
            `delete from users where id=?`,
            [id],
            (error, results) => {
                if (error){
                    return callBack(error);
                }
                return callBack(null, results);
            }
        );
    },
    getUserByUserEmail: (email, callBack) => {
        pool.query(
            `select * from users where email = ?`,
            [email],
            (error, results) => {
                if(error) {
                    return callBack(error);
                }
                return callBack(null, results[0]);
            }
        );
    }
}