const router = require('express').Router();
let Location = require('../Models/attractions.model');

router.route('/').get((req, res) => {
    Location.find()
    .then(location => 
        res.json(location))
        .catch((err) => {
            res.status(400).json('Error: ' + err)
        });
});

router.route('/:id').get((req, res) => {
    Location.findById(req.params.id)
    .then((location) => {
        res.json(location)
    }).catch((err)=> {
        res.status(400).json('Error ' + err)
    });
}).put((req, res)=> {
    Location.findById(req.params.id)
    .then((location)=> {
        location.address = req.body.address
        location.category = req.body.category
    })
    .catch((err) => {
        res.status(400).json('Error ' + err)
    });
});


module.exports = router;