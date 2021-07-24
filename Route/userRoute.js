const express = require('express');
const userController = require('../controller/userController');
const auth = require('../middleware/authController')

const Router = express.Router();

Router.use(express.urlencoded({ extended: true }))
Router.use(express.json())
Router.get('/',auth,userController.getAllUsers)
Router.post('/',auth,userController.signUp)
Router.post('/login', userController.login)
Router.put('/:id',userController.updateDetails)

module.exports = Router;