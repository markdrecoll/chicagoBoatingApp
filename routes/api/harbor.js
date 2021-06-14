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

router.get('/', (req, res) => {
    if (req.session.user_id) {
        db.User.find
        ({_id: req.session.user_id}).then(harborFound => {
            res.json(harborFound[0].harbor)
        })
    } else {
        res.send('Cant find the harbor, breaux')
    }
})

module.exports = router;