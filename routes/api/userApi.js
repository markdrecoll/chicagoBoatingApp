const router = require("express").Router();
const empController = require("../../controllers/empController");
const user = require("../../models/user");

router.route("/login").post( (req, res) => {

    user.findOne({username: req.body.username}).then(function(loginUser){
        loginUser.comparePassword(req.body.password, function(err, isMatch){
            if(isMatch){res.send({token: 'test'});}            
        });
    });
});

router.post("/signup", (req, res) => {
    console.log('sign up route!!', req.body);
    user.create({username: req.body.username, password: req.body.password}).then(function(newUser){
        console.log(newUser);
        res.send({
            token: 'test'
        });
    });
});

module.exports = router;