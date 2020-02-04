const express = require('express');
const headerControllers = require('../controllers/header-controllers');
const fileUpload = require('../middleware/file-upload');
const checkAuth = require('../middleware/check-auth');
const router = express.Router();

router.get('/:hid', headerControllers.getHeaderById);

router.get('/user/:uid', headerControllers.getHeaderByUserId);

router.use(checkAuth);

router.post('/', fileUpload.single('image'),headerControllers.createHeader);

router.patch('/:hid', fileUpload.single('image'), headerControllers.updateHeader);

router.delete('/:hid', headerControllers.deleteHeader);

module.exports = router;