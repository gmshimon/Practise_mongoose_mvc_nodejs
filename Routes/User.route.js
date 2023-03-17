const express = require('express');
const router = express.Router();
const userController = require('../Controller/User.controller')

router.route('/').get(userController.getUser).post(userController.postUser);
router.route('/:id').get(userController.getUserById)


module.exports = router;