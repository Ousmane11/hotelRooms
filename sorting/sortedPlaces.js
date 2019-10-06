const sortedPlaces = places => {
  places.sort((a , b) =>  a.price - b.price)
}

module.exports = sortedPlaces