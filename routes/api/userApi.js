const router = require("express").Router();
const empController = require("../../controllers/empController");
const user = require("../../models/user");
const { route } = require("./empApi");

router.post("/login", (req, res) => {

    user.findOne({username: req.body.username}).then(function(loginUser){
        loginUser.comparePassword(req.body.password, function(err, isMatch){
            if(isMatch){
                console.log('USER Logged in!!!', loginUser)
                

                req.session.save(() => {
                    req.session.user_id = loginUser._id;
                    req.session.logged_in = true;
                    req.session.username = loginUser.username
                    console.log('req.session after save!!!', req.session)
                    res.json({ user: loginUser, message: 'You are now logged in!' , logged_in: true});
                });
            }            
        });
    })
})

router.post("/signup", (req, res) => {
    console.log('sign up route!!', req.body);
    user.create({username: req.body.username, password: req.body.password}).then(function(newUser){
        console.log(newUser);
        req.session.save(() => {
            req.session.user_id = newUser._id;
            req.session.logged_in = true;
            req.session.username = newUser.username
            res.json({ user: newUser, message: 'You are now logged in!', logged_in:true });
        });
    })
})

router.get('/loginCheck', (req, res) => {
   
    console.log('whole ession', req.session)
   

    res.json(req.session)

})

router.get('/logout', (req, res) =>{
    if (req.session.logged_in){
        req.session.destroy(()=> {
            res.status(204).end()
        })
    } else {
        res.status(404).end()
    }
})

module.exports = router;