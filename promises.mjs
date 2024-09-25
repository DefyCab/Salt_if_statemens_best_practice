import fetch from "node-fetch"

fetch("https://randomuser.me/api/?results=10")
  .then((response) => response.json())
  .then((data) => {
    throw new Error("This is the error that I made")
  })
  .then((results) => console.log(`We got ${results.length} rows`))
  .catch((err) => console.log("Something went wrong", { err }))

fetch("https://randomuser.me/api/?results=1")
  .then((response) => response.json())
  .then((data) => data.results)
  .then((results) =>
    console.log(
      `We got the name of ${results[0].name.title} ${results[0].name.first} ${results[0].name.last}`
    )
  )

import { readFile } from "fs"
readFile("thisFileDoExist.json", "utf8", (err, file) => {
  if (err) {
    console.log("We got an error", { err })
  }
  // no error
  console.log(`That file has ${file.split("\n").length} lines`)
})
