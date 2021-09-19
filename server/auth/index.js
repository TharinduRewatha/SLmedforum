const express = require('express');
const passport = require('passport');
require('../passport/google');

const { create } = require('./utils')

const router = express.Router();



router.get('/google',
    passport.authenticate('google', { scope: ['profile', 'email'] }));

router.get('/google/callback', (req, res, next) => {
    passport.authenticate('google', async(err, user) => {
        if (err) { return next(err); }
        //if (!user) { return res.redirect('/login'); }
        // req.logIn(user, function(err) {
        //     if (err) { return next(err); }
        //     return res.redirect('/users/' + user.username);
        // });

        //Create a web token
        try {
            const token = await create(user);
            res.redirect(`${process.env.CLIENT_REDIRECT}${token}`);
        } catch (error) {
            res.redirect(`${process.env.CLIENT_ERROR_REDIRECT}${error.message}`);
        }


    })(req, res, next);
});


module.exports = router;