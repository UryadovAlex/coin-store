const {
    create,
    getUserById,
    getUsers,
    updateUser,
    deleteUser,
    getUserByUserEmail
} = require('./user.service');

const {genSaltSync, hashSync, compareSync} = require('bcrypt');
const {sign} = require('jsonwebtoken');

module.exports = {
    createUser: (req, res) => {
        const body = req.body;
        const salt = genSaltSync(10);
        console.log(salt);
        body.password = hashSync(body.password, salt);
        create(body, (err, results) => {
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
    getUserById: (req, res) => {
        const id = req.params.id;
        getUserById(id, (err, results)=>{
            if(err){
                console.log(err);
                return;
            }
            if(!results){
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
    getUsers: (req, res) => {
        getUsers((err, results) => {
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
    updateUser: (req, res) => {
        const id = req.params.id;
        const body = req.body;
        const salt = genSaltSync(10);
        body.password = hashSync(body.password, salt);
        updateUser(body, id, (err, results) => {
            if (err) {
                console.log(err);
                return;
            }
            if (!results.affectedRows) {
                return res.status(200).json({
                    success: 0,
                    message: "No such user!"
                });
            }
            const { password, password_compare, ...others } = body;
            return res.status(200).json({ id, ...others});
        });
    },
    deleteUser:  (req, res) => {
        const id = req.params.id;;
        deleteUser(id, (err, results) => {
            if (err) {
                console.log(err);
                return;
            }
            if(!results){
                return res.json({
                    success: 0,
                    message: 'Record not found'
                });
            }
            return res.status(200).json({
                success: 1,
                message: 'User deleted successfully'
            });
        });
    },
    login: (req, res) => {
        const body = req.body;
        getUserByUserEmail(body.email, (err, results) => {
           if (err) {
               console.log(err);
               return;
           }
           if (!results) {
               return res.json({
                   success: 0,
                   message: "Invalid email or password"
               });
           }
           const result = compareSync(body.password, results.password);
           if (result) {
               results.password = undefined;
               const jsontoken = sign({result: results}, process.env.TOKEN_KEY, {
                   // expiresIn: '1h'
               });
               return res.json({
                   success: 1,
                   token: jsontoken,
                   id: results.id,
                   name: results.firstName,
                   isAdmin: results.isAdmin
               })
           } else {
               return res.json({
                   success: 0,
                   message: "Invalid login or password!"
               });
           }
        });
    }
}