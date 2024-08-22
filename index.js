function getAge(birthYear, currentYear) {
  return currentYear - birthYear
}

const getAgeArrow = (birthYear, currentYear) => {
  return currentYear - birthYear
}

module.exports.getAge = getAge
module.exports.getAgeArrow = getAgeArrow