const router = require("express").Router();
const db = require('../../models');

router.put('/', (req, res) => {
    if (req.session.user_id) {
        db.User.findByIdAndUpdate(req.session.user_id, {
            attraction: req.body.attraction
        }).then(attractionUpdatedSuccess => {
            res.json(attractionUpdatedSuccess)
        })
    } else {
        res.send('You cannot be here--login failure')
    }
})

module.exports = router;