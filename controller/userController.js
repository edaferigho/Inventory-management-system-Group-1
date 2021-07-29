const User = require('../model/userModel');
const {Users} = require('../model/userModel')
const utils = require('../utils/utils')

const responseInfo = {
    status: "",
    message: ""
}

/**
 * This function processes the user signup request
 * @param req
 * @param res
 * @returns {Object<User> | Object<error>}
 */
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

/**
 * This function handles the user sign in request
 * @param req
 * @param res
 * @param next
 * @returns {Object<User> | Object<error>}
 */
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

/**
 *
 * @param req
 * @param res
 * @param next
 * @returns {Promise<void>}
 */
exports.updateDetails = async (req, res, next) => {
    const id = req.user.id
    let user = await User.updateUser(id, req.body)

    if (user) {

        responseInfo.status = "success";
        responseInfo.message = "Congratulations! Your details have been updated successfully."

        res.send(responseInfo).statusCode(200)
    } else {

        responseInfo.status = "error";
        responseInfo.message = "Sorry! Could not update your details. Please try again."

        res.send(responseInfo)
    }

    next()
}

exports.modifyPassword = async (req, res, next) => {
    const id = req.user.id

    let {oldpassword, newpassword, confirmpassword} = data = req.body;

    if (utils.isPasswordMatch(newpassword, confirmpassword)) {
        let queryUser = await User.findUserById(id);
        let dbOldPassword = queryUser.password;

        if (await utils.isCorrectPassword(oldpassword, dbOldPassword)) {

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
            responseInfo.message = "Sorry! Your old password is incorrect. Please try again."

            res.send(responseInfo)
        }

    } else {

        responseInfo.status = "error";
        responseInfo.message = "Sorry! Your password do not match. Please try again."

        res.send(responseInfo)
    }
    next()
}





