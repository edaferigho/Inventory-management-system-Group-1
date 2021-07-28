const jwt = require('jsonwebtoken');
const User = require('../model/userModel')

const responseInfo = {
    status: "",
    message: ""
}

const auth = async (req, res, next) => {
    let token = req.headers.authorization;

    try {
        const authUser = jwt.verify(token, process.env.SECRET);
        req.user = await User.findUserById(authUser.userid);

        next()
    } catch (error) {

        responseInfo.status = "error";
        responseInfo.message = "Sorry! Invalid authorization token supplied.";
        responseInfo.errordetails = error;
        res.send(responseInfo)
    }
}

module.exports = auth;