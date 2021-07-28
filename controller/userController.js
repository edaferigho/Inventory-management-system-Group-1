const User = require('../model/userModel');
const {Users} = require('../model/userModel')
const utils = require('../utils/utils')

const responseInfo = {
    status: "",
    message: ""
}

exports.signUp = async (req, res) => {
    const body = req.body;
    let user = {firstName, lastName, email, password} = body;
    const confirmPassword = body.confirmPassword

    if (!await utils.emailExist(email)) {

        const correctPassword = utils.getCorrectPassword(password, confirmPassword)

        if (correctPassword) {
            password = await utils.hashPassword(correctPassword)
            user.password = password;
            const response = await User.addUser(user)

            responseInfo.status = "success";
            responseInfo.message = "Congratulation! Your account has been created successfully."
            responseInfo.data = {
                id: response._id,
                name: response.firstName + ' ' + response.lastName,
                email: response.email
            }

            res.send(responseInfo)

        } else {
            res.status(406).json({
                status: 'failed!',
                message: 'Password Mismatch'
            })
        }
    } else {
        responseInfo.status = "error";
        responseInfo.message = `Sorry! User witht he following email already exist: ${email}`

        res.send(responseInfo)
    }

}
exports.login = async (req, res, next) => {

    let {email, password} = req.body;
    const user = await User.getUser(email);

    if (!user) {
        responseInfo.status = "error";
        responseInfo.message = `Sorry! User with the following email was not found on our system: ${email}`

        res.send(responseInfo)
    } else {

        if (await utils.isCorrectPassword(password, user.password)) {
            const token = await utils.genUserToken(user._id)

            responseInfo.status = "success";
            responseInfo.message = "Sign in successful."
            responseInfo.data = {
                id: user._id,
                name: user.firstName + ' ' + user.lastName,
                email: user.email,
                token: token
            }

            res.send(responseInfo)

        } else {
            responseInfo.status = "error";
            responseInfo.message = "Sorry! Your password is incorrect. Please try again."

            res.send(responseInfo)
        }
    }
    next()
}
exports.getUser = (req, res) => {
    const user = req.user;
    res.redirect(301, req.originalUrl + '/' + user._id)
}

exports.getAllUsers = async (req, res, next) => {
    res.send(await User.fetchAllUsers())

    next()
}

exports.getUserDetails = async (req, res) => {
    const userInfo = {
        id: req.user.id,
        firstname: req.user.firstName,
        lastname: req.user.lastName,
        email: req.user.email
    }

    res.status(200).json(userInfo)
}

exports.updateDetails = async (req, res, next) => {
    const id = req.user.id
    let user
    let data = req.body;
    if (data.password !== undefined) {

        // Hashing password before updating if it exists
        data.password = await utils.hashPassword(data.password)
        user = await User.updateUser(id, data)
    } else {
        user = await User.updateUser(id, data)
    }
    if (user) {
        res.status(200).json({
            message: 'User details Updated Successfully!'
        })
    } else {
        utils.sendNotFoundError(res, 'User')
    }

    next()
}

exports.modifyPassword = async (req, res, next) => {
    // TODO: doesn't get id from the user request object.
    const id = req.user.id

    let user
    let {newpassword, confirmpassword} = data = req.body;

    // TODO: Check whether old password matches the new password.
    if (utils.isPasswordMatch(newpassword, confirmpassword)) {

        // Hashing password before updating it.
        let hashedPassword = await utils.hashPassword(newpassword)
        let updatePassword = await Users.Users.findByIdAndUpdate(id, {password: hashedPassword})

        if (updatePassword) {

            responseInfo.status = "success";
            responseInfo.message = "Congratulations! Your password has been modified successfully."

            res.send(responseInfo)
        } else {

            responseInfo.status = "error";
            responseInfo.message = "Sorry! Your password could not be modified. Please try again."

            res.send(responseInfo)
        }

    } else {

        responseInfo.status = "error";
        responseInfo.message = "Sorry! Your password do not match. Please try again."

        res.send(responseInfo)
    }

    next()
}





