const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const userModel = require('../model/userModel')

exports.getCorrectPassword = function (password, confirmPassword) {
    return password === confirmPassword ? password : null;
}

exports.isPasswordMatch = function (password, confirmPassword) {
    return password === confirmPassword;
}


exports.isPasswordMatchDBPassword = async (userid, password, dbpassword) => {
    let response;
    try {
        response = await bcrypt.compare(password, dbpassword)
    } catch (error) {
        console.error(error);
    }

    return response;
}

exports.hashPassword = async (password) => {
    let hashedPassword;
    try {
        hashedPassword = await bcrypt.hash(password, 12)
    } catch (error) {
        console.error(error);
    }

    return hashedPassword
}

exports.emailExist = async (email) => {
    let found
    try {
        found = await userModel.getUser(email)
    } catch (error) {
        console.error(error);
    }

    return found ? true : false
}

exports.isCorrectPassword = async (password, originalPassword) => {
    let response;
    try {
        response = await bcrypt.compare(password, originalPassword)
    } catch (error) {
        console.error(error);
    }

    return response;
}

exports.genUserToken = async (userid) => {
    return await jwt.sign({userid}, process.env.SECRET, {expiresIn: process.env.JWT_EXPIRES_IN})
}
exports.sendNotFoundError = (outputHandler, sender) => {
    outputHandler.status(404).json({
        status: 'Failed!',
        message: `${sender} not found!`
    })
}