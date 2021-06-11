const router = require("express").Router();
const db = require('../../models');

router.put('/', (req, res) => {
    if (req.session.user_id) {
        db.User.findByIdAndUpdate(req.session.user_id, {
            harbor: req.body.harbor
        }).then(harborUpdatedSuccess => {
            res.json(harborUpdatedSuccess)
        })
    } else {
        res.send('You cannot be here--login failure')
    }
})

module.exports = router;