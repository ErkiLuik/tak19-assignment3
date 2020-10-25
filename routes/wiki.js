var express = require('express');
var router = express.Router();
const https = require('https');
const axios = require('axios');

/* GET wiki page by title */
router.get('/:pageTitle', function (req, res, next) {
    //   res.send(req.params.pageTitle); // Return all parameters

    const requestUrl = `https://en.wikipedia.org/api/rest_v1/page/summary/${req.params.pageTitle}`;

    /* Node internal HTTPS library implementation */
    // https.get(requestUrl, (internalRes) => {
    //     let responseData;

    //     internalRes.on('data', (d) => {
    //         responseData += d;
    //     })

    //     internalRes.on('end', () => {
    //         res.send(responseData);
    //     })
    // } ) 

    /* Axios library implementation */
    axios.get(requestUrl).then(response => {
        res.send(response.data)
    })
});

/**
 * Filter out properties only client application needs
 * @param {Original Wikimedia response object} responseData 
 */
function convertResponse(responseData) {

}

module.exports = router;
