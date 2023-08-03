const router = require('express').Router();

router.get('/', async (req, res) => {
    res.render('homepage')
});

router.get('/login', (req, res) => {
    res.render('login')
});

router.get('/signup', (req, res) => {
    console.log('working')
    res.render('signup')
});


module.exports = router