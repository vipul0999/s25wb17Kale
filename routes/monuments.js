var express = require('express');
var router = express.Router();

/* GET monuments page. */
router.get('/monuments', function(req, res, next) {
  res.render('monuments', { title: 'Search Results - Monuments' });
});

module.exports = router;
