const jwt = require('jsonwebtoken');
const User = require('../../schema/user-model');
const sha1 = require('sha1');

function newUser(req, res) {
    console.log(req.body);
    let userJson = req.body;
    let user = new User({
        fname: userJson.fname,
        sname: userJson.sname,
        email: userJson.email,
        password: sha1(userJson.password),
        role: 'not_approved'
    })
    user.save()
    .then(user => {
        res.json({success: true, data: user})
    })
    .catch(err => {
        res.json({success: false, data: err});
    })
}

function updateUser(req, res) {

}

function getUsers(req, res) {
    User.find()
        .then(function (users) {
            res.json({ success: true, data: users });
        })
}

function isValidToken(req, res) {
    const token = req.body.token || req.headers['x-access-token'];
    if (token) {
        jwt.verify(token, process.env.SECRET, function (err, decoded) {
            if (err) {
                return res.json({ success: false, message: 'Virheellinen token' })
            } else {
                req.decoded = decoded;
                console.log(decoded);
                res.json({success: true, message: 'Validi token'});
            }
        })
    } else {
        res.status(403).send({
            success: false,
            message: 'Tokenia ei saatu'
        })
    } 
}

function checkToken(req, res, next) {
    const token = req.headers['x-access-token'];
    if (token) {
        jwt.verify(token, process.env.SECRET, function (err, decoded) {
            if (err) {
                return res.json({ success: false, message: 'Virheellinen token' })
            } else {
                req.decoded = decoded;
                next();
            }
        })
    } else {
        res.status(403).send({
            success: false,
            message: 'Tokenia ei saatu'
        })
    }
}

function authenticate(req, res, next) {

    User.findOne({
        email: req.body.email
    })
        .catch(function (err) {
            res.json({ success: false, message: 'Error in getting user.' });
        })
        .then(function (user) {
            if (!user) {
                res.json({ message: 'Käyttäjää ei löytynyt' });
            } else if (user.password != sha1(req.body.password)) {
                res.json({ message: 'Virheellinen salasana' });
            } else {
                const token = jwt.sign(user.toObject(), process.env.SECRET, {
                    expiresIn: 60*1, // expires in 1 hours
                });
                res.json({
                    success: true,
                    message: 'Enjoy your token!',
                    token: token
                });
            }
        })

}

module.exports.newUser = newUser;
module.exports.authenticate = authenticate;
module.exports.getUsers = getUsers;
module.exports.updateUser = updateUser;
module.exports.checkToken = checkToken;
module.exports.isValidToken = isValidToken;