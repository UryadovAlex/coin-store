const {
    createCoin,
    getCoinById,
    deleteCoin,
    updateCoin,
    getCoins,
    searchCoin,
    getDataForFilter,
    getFilteredCoins
} = require('./coin.controller');
const router = require('express').Router();
const { checkToken } = require('../../auth/token_validation');
const multer = require('multer');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads');
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + file.originalname);
    }
});

const upload = multer({storage: storage});
const multiplyUpload = upload.fields([{name: 'obverseLink'}, {name: 'reverseLink'}])

router.post('/', checkToken, multiplyUpload, createCoin);
router.get('/filter', getDataForFilter);
router.post('/filteredCoins', getFilteredCoins);
router.get('/', searchCoin);
router.get('/category/:type', getCoins);
router.get('/:id', getCoinById);
router.put('/:id', checkToken, multiplyUpload, updateCoin);
router.delete('/:id', checkToken, deleteCoin);

module.exports = router;