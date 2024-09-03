import assert from "assert"

// destructing syntax {}
import {
  getAge,
  getAgeArrow,
  getAgeGroup,
  getAgeForPerson,
  divide,
} from "./index.mjs"
import { describe, it } from "mocha"

describe("age calculator", () => {
  it("someone born 1972 is 50 in 2022", () => {
    //act
    const result = getAge(1972, 2022)

    // assert
    assert.equal(result, 50)
  })
})

describe("age calculator Love", () => {
  it("someone born 1979 is 45 in 2024", () => {
    //act
    const result = getAgeArrow(1979, 2024)

    // assert
    assert.equal(result, 45)
  })
})

describe("age classifier", () => {
  it("A age less than zero should return not possible", () => {
    const result = getAgeGroup(-1)

    assert.equal(result, "not possible")
  })

  it("0-3 years old sould be a toddler", () => {
    // loopen kollar alla exempel 0-3
    for (let i = 0; i < 4; i++) {
      const result = getAgeGroup(i)

      assert.equal(result, "toddler")
    }
  })

  it("4-12 years old should be a kid", () => {
    for (let i = 4; i < 13; i++) {
      const result = getAgeGroup(i)

      assert.equal(result, "kid")
    }
  })

  it("13-19 yeras old should be a teenager", () => {
    for (let i = 13; i < 20; i++) {
      const result = getAgeGroup(i)

      assert.equal(result, "teenager")
    }
  })

  it("20-30 years old should be a adult", () => {
    for (let i = 20; i < 31; i++) {
      const result = getAgeGroup(i)

      assert.equal(result, "adult")
    }
  })

  it("But 50 is the prime age", () => {
    const result = getAgeGroup(50)

    assert.equal(result, "prime")
  })

  it("above 39 years old.... you are just old", () => {
    for (let i = 39; i < 50; i++) {
      const result = getAgeGroup(i)

      assert.equal(result, "old")
    }

    for (let i = 51; i < 121; i++) {
      const result = getAgeGroup(i)

      assert.equal(result, "old")
    }
  })

  it("above 120 years should return not likely", () => {
    const result = getAgeGroup(121)

    assert.equal(result, "not likely")
  })
})

describe("get age with objects", () => {
  it("get age for person", () => {
    const currentYear = 2024
    const person = {
      name: "Love",
      birthYear: 1979,
      isTeacher: true,
    }

    const age = getAgeForPerson(person, currentYear)

    assert.equal(age, 45)
  })
})

describe("get info from nested objects", () => {
  it("get perons favourite movie and that movies main actor", () => {
    const people = {
      person: [
        {
          name: "Love",
          favouriteMovies: [
            {
              name: "Star Wars IV",

              actors: [
                {
                  name: "Mark Hamill",
                  role: "Luke Skywalker",
                },

                {
                  name: "Carrie Fischer",
                  role: "Leia Skywalker",
                },
              ],
            },
          ],
        },
        {
          name: "Erik",
          favouriteMovies: [
            {
              name: "Breackfast Club",

              actors: [
                {
                  name: "Judd Nelson",
                  role: "Bender",
                },
              ],
            },
          ],
        },
      ],
    }

    assert.equal(people.person[1].favouriteMovies[0].actors[0].role, "Bender")
    assert.equal(
      people.person[0].favouriteMovies[0].actors[1].name,
      "Carrie Fischer"
    )
  })
})

describe("division", () => {
  it("4 divided with 2 is 2", () => {
    // act
    const result = divide(4, 2)

    // assert
    assert.equal(result, 2)
  })
})

it("4 divided with 0 is ?", () => {
  // act
  const result = divide(4, 0)

  // assert
  assert.equal(result, null)
})
