const express = require('express');
const userController = require('../controller/userController');
const auth = require('../middleware/authController')

const Router = express.Router();

Router.use(express.urlencoded({ extended: true }))
Router.use(express.json())
Router.get('/user/:id', auth, userController.getUserDetails)
Router.get('/user', auth, userController.getUser)
Router.post('/signup',userController.signUp)
Router.post('/login', userController.login)
Router.put('/user',auth, userController.updateDetails)


module.exports = Router;