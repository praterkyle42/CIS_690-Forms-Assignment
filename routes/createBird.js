const birdFormController = require('../controllers/birdFormController');
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', birdFormController.get_Birdform);

router.get('/create', function(req,res,next) {
    res.render('create')
});

router.post('/create', function(req,res,next) {
    res.redirect('create')
    let newBird = {
        species: req.body.species,
        nickname: req.body.nickname, 
        status: req.body.status,
    }
    console.log(newBird);
});
module.exports = router;