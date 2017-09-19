const router = require('express').Router();
const auth = require('./auth')
const produktionjasen = require('./produktio/produktionjasen');
const user = require('./admin/user');

const index = require('./index/index');

    router.get('/', index.test);


    // Produktion jäsenet
    router.get('/produktionjasen', auth.isLoggedIn, produktionjasen.getAll);
    router.get('/produktionjasen/:_id', produktionjasen.getById);
    router.post('/produktionjasen', produktionjasen.newJasen);
    
    // Jäsenrekisteri

    // Käyttäjät
    router.post('/uusiKayttaja', user.newUser);
    

module.exports = router;