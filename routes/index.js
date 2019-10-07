const express = require("express");
const router = express.Router();

const hotels = require("../public/seed");
const sortedPlaces = require("../sorting/sortedPlaces");

/* GET home page */
router.get("/", (req, res) => {
  //1.  ​checkin​ y ​checkout​ la ​fecha actual​ y ​la de mañana​, ​1 adulto​ y ​1 niño​.
  const checkIn = new Date().toJSON().slice(0, 10);
  const checkOut = new Date(+new Date() + 86400000).toJSON().slice(0, 10);
  const adults = 1;
  const children = 1;
  const placesFiltered = hotels.filter(places => places.people >= 2);
  sortedPlaces(placesFiltered);

  res.render("index", { placesFiltered, checkIn, checkOut, adults, children });
});

router.get("/modify", (req, res) => {
  // 3. Búsqueda de habitación con formulario
  const { checkIn, checkOut, adults, children } = req.query;
  
  const numberAdults = parseFloat(adults);
  const numberChildren = parseFloat(children);
  const people = numberAdults + numberChildren;
  console.log(`people number is ${people}`)
  
  const placesFiltered = hotels.filter(places => places.people >= people);
  sortedPlaces(placesFiltered);
  console.log(`the places are ${placesFiltered}`)
  res.render("index", { placesFiltered, checkIn, checkOut, adults, children });
});

module.exports = router;
