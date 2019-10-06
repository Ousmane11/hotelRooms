const express = require('express');
const router  = express.Router();

const hotels = require('../public/seed')
const  sortedPlaces = require('../sorting/sortedPlaces')

/* GET home page */
router.get('/', (req, res) => {
  //1.  ​checkin​ y ​checkout​ la ​fecha actual​ y ​la de mañana​, ​1 adulto​ y ​1 niño​.
  const checkIn = new Date().toJSON().slice(0,10)
  const checkOut = new Date(+new Date() + 86400000).toJSON().slice(0,10)
  const adults = 1
  const children = 1
  const placesFiltered = hotels.filter( places =>  places.people >= 2)

  res.render('index', {placesFiltered, checkIn, checkOut, adults, children})
 
  
})

module.exports = router;
