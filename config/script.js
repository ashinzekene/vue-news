const fs = require("fs")
const file = './dist/index.html'
const replacer = '/vue-news/static/'

fs.readFile(file, "utf-8", (err, data)  => {
  if (err) return console.log("Could not open file")
  let newData = data.toString().replace(/\/static\//g, replacer)
  fs.writeFile(file,newData, (err) => {
    if (!err) console.log("Done!!")
  })
})