function getAge(birthYear, currentYear) {
  return currentYear - birthYear
}

const age = getAge(1972, 2022)

module.exports.getAge = getAge