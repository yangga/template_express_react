const express = require('express')
    , router = express.Router()

router.get('/test', function(req, res, next) {
    res.json({
        msg: 'hello world'
    })
});





module.exports = router;
