const jasen = require('../../schema/produktiojasen-model');

function getAll (req, res) {
    jasen.find()
    .catch(function(err) {
        res.status(500).send(err);
    })
    .then(function(data) {
        res.status(200).send(data);
    })
}

/**
 * Return by req.body._id.
 */
function getById (req, res) {
    res.status(200).send("ok");
}

function newJasen (req, res) {
    let uusiJasen = req.body;
    let jasen = new jasen({
        fname: uusiJasen.fname,
        sname: uusiJasen.sname,
        email: uusiJasen.email,
        pnumber: uusiJasen.pnumber,
        tehtavat: uusiJasen.tehtavat,
        jarjesto: uusiJasen.jarjesto,
        lisatiedot: uusiJasen.lisatiedot,
        hakeeJaseneksi: uusiJasen.jasenyys,
        vuosi: '2018'
    })
    jasen.save()
    .then(jasen => {
        res.json({success: true, data: jasen});
    })
    res.json({success: true});
}

module.exports.getAll = getAll;
module.exports.getById = getById;
module.exports.newJasen = newJasen;