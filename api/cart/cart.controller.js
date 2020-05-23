const {
    add,
    getCartById,
    updateCart,
    deleteCart
} = require('./cart.service');

module.exports = {
    add: (req, res) => {
        add(req.body, (err, results) => {
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
    getCartById: (req, res) => {
        const id = req.params.id;
        getCartById(id, (err, results)=>{
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
            console.log(results)
            return res.json({
                success: 1,
                data: results
            });
        });
    },
    updateCart: (req, res) => {
        const id = req.params.id;
        const body = req.body;
        updateCart(body, id, (err, results) => {
            if (err) {
                console.log(err);
                return;
            }
            if (!results.affectedRows) {
                return res.status(200).json({
                    success: 0,
                    message: "No such item!"
                });
            }
            return res.status(200).json({
                success: 1,
                message: "Updated successfully!"
            });
        });
    },
    deleteCart:  (req, res) => {
        const id = req.params.id;
        deleteCart(id, (err, results) => {
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
                message: 'Item deleted successfully'
            });
        });
    },
}