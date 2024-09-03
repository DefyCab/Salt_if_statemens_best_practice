export function getAge(birthYear, currentYear) {
  return currentYear - birthYear
}

export function getAgeForPerson(person, currentYear) {
  return currentYear - person.birthYear
}

export const getAgeArrow = (birthYear, currentYear) => {
  return currentYear - birthYear
}

export const divide = (number1, number2) => {
  if (number2 === 0) {
    throw new Error("Divide by zero is not permitted")
  }
  return number1 / number2
}

export const getAgeGroup = (age) => {
  // if condition is met returns the value and then exist the function. Return exist function.

  if (age < 0) return "not possible"
  if (age < 4) return "toddler"
  if (age < 13) return "kid"
  if (age < 20) return "teenager"
  if (age < 39) return "adult"
  if (age === 50) return "prime"
  if (age < 121) return "old"
  return "not likely"
}
