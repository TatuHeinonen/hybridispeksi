const config = require('./../config');
const axios = require('axios');


const PAYMENT_URL = 'https://payment.paytrail.com/api-payment/create';

module.exports = {
    createPayment: (booking) => {
        let payment;
        if (process.env.NODE_ENV === 'develop') {
            payment = {
                "currency": "EUR",
                "locale": "fi_FI",
                "urlSet": {
                    "success": "http://127.0.0.1:3000/esitykset/success",
                    "failure": "http://127.0.0.1:3000/esitykset/failure",
                    "pending": "http://127.0.0.1:3000/esitykset/success",
                    "notification": "http://127.0.0.1:3000/esitykset/success"
                },
            }
        } else {
            payment = {
                "currency": "EUR",
                "locale": "fi_FI",
                "urlSet": {
                    "success": "http://www.hybridispeksi.fi/esitykset/success",
                    "failure": "http://www.hybridispeksi.fi/esitykset/failure",
                    "pending": "http://www.hybridispeksi.fi/esitykset/success",
                    "notification": "http://www.hybridispeksi.fi/esitykset/success"
                },
            }
        }
        payment.price = countPrice(booking);
        payment.orderNumber = booking._id;
        const p = new Promise((resolve, reject) => {
            console.log('send ajax to paytrail')
            console.log(config.kauppiastunnus + " " + config.kauppiasvarmenne);
            // axios.post(PAYMENT_URL, data, CONFIG)
            axios({
                method: 'post',
                url: PAYMENT_URL,
                auth: {
                    username: config.kauppiastunnus,
                    password: config.kauppiasvarmenne,
                },
                data: JSON.stringify(payment),
                headers: {
                    "Content-Type": "application/json",
                    "X-Verkkomaksut-Api-Version": 1
                }
            })
            .then(data => {
                resolve(data);
            })
            .catch(err => {
                // console.log(err);
                console.log('epäonnistunut maksutapahtuman luonti');
                reject({code: 500, message: 'Maksutapahtuman luonti epäonnistui.'})
            })
        })
        return p;
    }
}

function countPrice(varaus) {
    var price = 0;
    price += varaus.scount * config.sprice;
    price += varaus.ncount * config.nprice;
    price += varaus.ocount * varaus.oprice;
    price += 0.5;

    return price;
}

function checkValidity(params, authcode) {
    var hash = crypto.createHash('md5').update(params).digest('hex');
    var valid = false;
    if (hash.toUpperCase() === authcode.toUpperCase())
        return true;
    else
        return false;
}