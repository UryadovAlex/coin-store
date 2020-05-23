const {
    add,
    getCartById,
    updateCart,
    deleteCart
} = require('./cart.controller');
const router = require('express').Router();
//const { checkToken } = require('../../auth/token_validation');

router.post('/', add)
router.get('/:id', getCartById);
router.put('/:id', updateCart);
router.delete('/:id', deleteCart);

module.exports = router;