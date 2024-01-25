const jwt = require('jsonwebtoken');
const { StatusCodes } = require('http-status-codes');

const authenticate = async (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith('Bearer')) {
        return res.status(StatusCodes.MISDIRECTED_REQUEST).send('Enter a valid authorization token');
    }
    const token = authHeader.split(' ')[1];
    try {
        const payload = jwt.verify(token, process.env.SECRET_KEY);
        req.user = { role: payload.role, id: payload.id };
        next();
    } catch (err) {
        console.log('Error verifying the access token', err);
        return res.status(StatusCodes.MISDIRECTED_REQUEST).send('You are not authorized to access this route');
    }
}

module.exports = authenticate;
