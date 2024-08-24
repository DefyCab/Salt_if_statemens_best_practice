import assert from "assert"

// destructing syntax {}
import { getAge, getAgeArrow, getAgeGroup } from "./index.mjs"
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
  it("0-3 years old sould be a toddler", () => {
    
    //
    for(let i = 0; i < 4; i++) {
      const result = getAgeGroup(i)
      
      assert.equal(result, "toddler")
    }

  })
  it("4-12 years old should be a kid", () => {
    const result = getAgeGroup(5)

    assert.equal(result, "kid")
  })

  it("13-19 yeras old should be a teenager", () => {
    const result = getAgeGroup(15)

    assert.equal(result, "teenager")
  })
  it("20-30 years old should be a adult", () => {
    const result = getAgeGroup(27)

    assert.equal(result, "adult")
  })
  it("above 39 years old.... you are just old", () => {
    const result = getAgeGroup(40)

    assert.equal(result, "old")
  })
})
