/**
 * Created by ldowell on 3/10/16.
 */

var router = require('express').Router();

router.get('/:id', function(req, res) {
    console.log('Trying to join race with ID: ' + req.params.id);
});

module.exports = router;