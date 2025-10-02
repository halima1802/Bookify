const jwt = require('jsonwebtoken');
const createError = require('./error');


module.exports.verifyToken = (req, res, next) => {
    const token = req.cookies.access_token;
        if(!token) return next(createError(401, "Unauthorized User"));
        jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
            if(err) return next(createError(403, "Token is not valid"));
            req.user = user;
            next();
        })
    
}

module.exports.verifyUser = (req, res, next) => {
    this.verifyToken(req, res, (err) => {
        if(err){
            return next(err);
        }
        if(req.user.id === req.params.id || req.user.isAdmin){
            next();
        }else{
            return next(createError(403, "Forbidden"));
        }
    })
}


module.exports.verifyAdmin = (req, res, next) => {
    this.verifyToken(req, res, (err) => {
        if (err) {
            return next(err);
        }
        if (req.user.isAdmin) {
            next();
        } else {
            return next(createError(403, "Forbidden"));
        }
    });
}

