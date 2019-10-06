const express = require('express');
const router  = express.Router();

const hotels = require('../bin/seed')

/* GET home page */
router.get('/', (req, res) => {
  

  res.render('index',{hotels})
})

module.exports = router;
