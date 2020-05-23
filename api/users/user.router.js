const {
    createUser,
    getUserById,
    deleteUser,
    updateUser,
    getUsers,
    login
} = require('./user.controller');
const router = require('express').Router();
const { checkAdminToken } = require('../../auth/token_validation');

router.post('/', createUser);
router.get('/', checkAdminToken, getUsers);
router.get('/:id', checkAdminToken, getUserById);
router.put('/:id', checkAdminToken, updateUser);
router.delete('/:id', checkAdminToken, deleteUser);
router.post('/login', login);

module.exports = router;