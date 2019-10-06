const express = require('express');
const router  = express.Router();

const hotels = require('../bin/seed')

/* GET home page */
router.get('/', (req, res) => {
  //1.  ​checkin​ y ​checkout​ la ​fecha actual​ y ​la de mañana​, ​1 adulto​ y ​1 niño​.
  const checkIn = new Date().toJSON().slice(0,10)
  const checkOut = new Date(+new Date() + 86400000).toJSON().slice(0,10)
  const adults = 1
  const children = 1
  res.render('index', {hotels, checkIn, checkOut, adults, children})
 
  
})

module.exports = router;
