const sortPlaces = sortedPlaces => {
  sortedPlaces.sort((a,b) =>  a.price - b.price)
}

module.exports = sortPlaces