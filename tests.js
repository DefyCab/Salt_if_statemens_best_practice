const assert = require("assert")
const app = require("./index.js")

describe("age calculator", () => {
  it("someone born 1972 is 50 in 2022", () => {
    //act
    const result = app.getAge(1972, 2022)

    // assert
    assert.equal(result, 50)
  })
})

describe("age calculator Love", () => {
    it("someone born 1979 is 45 in 2024", () => {
      //act
      const result = app.getAgeArrow(1979, 2024)
  
      // assert
      assert.equal(result, 45)
    })
  })
  