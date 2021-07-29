const jwt = require('jsonwebtoken');
const User = require('../model/userModel')

const responseInfo = {
    status: "",
    message: ""
}

/**
 * @param req
 * @param res
 * @param next
 * @returns {Object<User>}
 */
const auth = async (req, res, next) => {
    let token = req.headers.authorization;

    try {
        const authUser = jwt.verify(token, process.env.SECRET);
        req.user = await User.findUserById(authUser.userid);

        next()
    } catch (error) {

        responseInfo.status = "error";
        responseInfo.message = "Sorry! Invalid authorization token supplied.";

        res.send(responseInfo)
    }
}

module.exports = auth;