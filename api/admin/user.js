const jwt = require('jsonwebtoken');
const User = require('../../schema/user-model');
const sha1 = require('sha1');
const config = require('../../config');

function newUser(req, res) {
  const userJson = req.body;
  const user = new User({
    fname: userJson.fname,
    sname: userJson.sname,
    email: userJson.email,
    password: sha1(userJson.password),
    role: config.EI_HYVAKSYTTY,
  });
  User.findOne({ email: userJson.email })
    .then((data) => {
      if (data) {
        console.log('user found');
        res.json({ success: false, message: 'Käyttäjä on jo olemassa!' });
      } else {
        console.log('user not found');
        user
          .save()
          .then((_user) => {
            res.json({ success: true, data: _user });
          })
          .catch((err) => {
            res.json({ success: false, data: err });
          });
      }
    })
    .catch(() => {
      res.json({ success: false, message: 'Virhe haettaessa olemassa olevia käyttäjiä' });
    });
}

function updateUser(req, res) {
  const user = req.body;
  User.findByIdAndUpdate(user._id, user)
    .then((_data) => {
      res.json({ success: true, data: _data });
    })
    .catch((err) => {
      res.json({ success: true, data: err });
    });
}

function deleteUser(req, res) {
  User.findByIdAndRemove(req.params._id)
    .then((_data) => {
      res.json({ success: true, data: _data });
    })
    .catch((err) => {
      res.json({ success: false, data: err });
    });
}

function getUsers(req, res) {
  User.find().then((users) => {
    res.json({ success: true, data: users });
  });
}

function isValidToken(req, res) {
  /* if (process.env.NODE_ENV === "develop") {
        res.json({ success: true, message: 'In develop mode, token not required' });
    } */
  const token = req.body.token || req.headers['x-access-token'];
  if (token) {
    jwt.verify(token, process.env.SECRET, (err, decoded) => {
      if (err) {
        return res.json({ success: false, message: 'Virheellinen token' });
      }
      req.decoded = decoded;
      res.json({ success: true, message: 'Validi token' });
    });
  } else {
    res.status(403).send({
      success: false,
      message: 'Tokenia ei saatu',
    });
  }
}

function checkToken(req, res, next) {
  const token = req.headers['x-access-token'];
  if (token) {
    jwt.verify(token, process.env.SECRET, (err, decoded) => {
      if (err) {
        return res.json({ success: false, message: 'Virheellinen token' });
      }
      req.decoded = decoded;
      next();
    });
  } else {
    res.status(403).send({
      success: false,
      message: 'Tokenia ei saatu',
    });
  }
}

function authenticate(req, res) {
  User.findOne({
    email: req.body.email,
  })
    .catch(() => {
      res.json({ success: false, message: 'Error in getting user.' });
    })
    .then((user) => {
      console.log(user.fname + ' ' + user.sname + ' tries to sign in');
      if (!user) {
        res.json({ message: 'Käyttäjää ei löytynyt' });
        console.log('No user found');
      } else if (user.password != sha1(req.body.password)) {
        res.json({ message: 'Virheellinen salasana' });
        console.log('Wrong password');
      } else if (user.role === config.EI_HYVAKSYTTY) {
        res.json({ success: false, message: 'Käyttäjää ei ole vielä hyväksytty' });
      } else {
        console.log('Sign in success');
        const payload = {
          fname: user.fname,
          sname: user.sname,
          role: user.role,
          _id: user._id,
        };
        const token = jwt.sign(payload, process.env.SECRET, {
          expiresIn: '1h', // expires in 1 hours
        });
        res.json({
          success: true,
          message: 'Enjoy your token!',
          token,
          user,
        });
      }
    });
}

function isHallitus(req, res, next) {
  if (req.decoded.role < 4) {
    res.json({ success: false, message: 'Hallitusoikeudet vaadittu' });
  } else next();
}

function isWebmaster(req, res, next) {
  if (req.decoded.role < 5) {
    res.json({ success: false, message: 'Webmaster-oikeudet vaadittu' });
  } else next();
}

module.exports.newUser = newUser;
module.exports.authenticate = authenticate;
module.exports.getUsers = getUsers;
module.exports.updateUser = updateUser;
module.exports.checkToken = checkToken;
module.exports.isValidToken = isValidToken;
module.exports.isHallitus = isHallitus;
module.exports.isWebmaster = isWebmaster;
module.exports.deleteUser = deleteUser;
