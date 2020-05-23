const { verify } = require('jsonwebtoken');
const  pool  = require('../config/database');

module.exports = {
    checkToken: (req, res, next) => {
        let token = req.get('authorization');
        if (token) {
            //token = token.slice(7);
            verify(token, process.env.TOKEN_KEY, (err, decoded) => {
                if (err) {
                    res.json({
                        success: 0,
                        message: 'Invalid token!'
                    });
                } else {
                    next();
                }
            });
        } else {
            res.json({
                success: 0,
                message: 'Access denied. Unauthorized user!'
            });
        }
    },
    checkAdminToken: (req, res, next) => {
        let token = req.get('authorization');
        let id = req.get('id');
        pool.query(
            `select isAdmin from users where id = ?`,
            [id],
            (error, results) => {
                if (error) {
                    res.status(500).send();
                }
                if (results[0] && !results[0].isAdmin) {
                    res.status(403).send('Access Forbidden');
                }
                else if (token) {
                    //token = token.slice(7);
                    verify(token, process.env.TOKEN_KEY, (err, decoded) => {
                        if (err) {
                            res.json({
                                success: 0,
                                message: 'Invalid token!'
                            });
                        } else {
                            next();
                        }
                    });
                } else {
                    res.json({
                        success: 0,
                        message: 'Access denied. Unauthorized user!'
                    });
                }
            }
        );
    }
}