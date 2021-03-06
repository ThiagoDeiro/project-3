const express = require('express');
const { check } = require('express-validator');

const usersController = require('../controllers/users-controllers');

const router = express.Router();

router.get('/', usersController.getUsers);

router.post(
  '/signup',
  [
    check('name')
      .not()
      .isEmpty(),
    check('email')
      .normalizeEmail()
      .isEmail(),
    check('password').isLength({ min: 5 })
  ],
  usersController.signup
);

router.post('/login', usersController.login);
router.post('/:uid/send-to-admin', usersController.sendAdminEmail);
router.post('/:aid/send-to-user/:uid', usersController.sendUserEmail);

module.exports = router;
