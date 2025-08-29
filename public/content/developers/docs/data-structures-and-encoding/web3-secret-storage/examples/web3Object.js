const fs = require("fs");
const recognizer = require("ethereum-keyfile-recognizer");

fs.readFile("3198bc9c-6672-5ab3-d995-4942343ae5b6.json", (err, data) => {
  var json = JSON.parse(data)
  var result = recognizer(json)
  console.log(result)
})