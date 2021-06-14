const router = require("express").Router();
const user = require("../../models/user");

// user login code
router.post("/login", (req, res) => {
    user.findOne({ username: req.body.username }).then(function (loginUser) {
        loginUser.comparePassword(req.body.password, function (err, isMatch) {
            if (isMatch) {
                req.session.save(() => {
                    req.session.user_id = loginUser._id;
                    req.session.logged_in = true;
                    req.session.username = loginUser.username
                    res.json({ user: loginUser, message: 'You are now logged in.', logged_in: true });
                });
            }
        });
    })
})

// user sign up code
router.post("/signup", (req, res) => {
    user.create({ username: req.body.username, password: req.body.password }).then(function (newUser) {
        req.session.save(() => {
            req.session.user_id = newUser._id;
            req.session.logged_in = true;
            req.session.username = newUser.username
            res.json({ user: newUser, message: 'You are now logged in.', logged_in: true });
        });
    })
    .catch((err)=>{
        console.log("******UserName Already EXISTS******** \n", err)
    })
})

router.get('/loginCheck', (req, res) => {
    res.json(req.session)
})

router.get('/logout', (req, res) => {
    if (req.session.logged_in) {
        req.session.destroy(() => {
            res.status(204).end()
        })
    } else {
        res.status(404).end()
    }
})

module.exports = router;