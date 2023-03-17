const express = require('express');
const router = express.Router();
const userController = require('../Controller/User.controller')

router.route('/').get(userController.getUser).post(userController.postUser);


module.exports = router;