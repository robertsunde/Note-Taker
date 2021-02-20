// API Routes
const fs = require (`fs`)
const app = require (`express`).Router()
const dbfile = require (`../../db/db.json`)

// module.exports = (app) => {

app.get("/notes", (req, res) => {
dbfile = JSON.parse(fs.readFileSync("../../db/db.json", "utf-8"))
res.json(dbfile)

}) 




// }

module.exports = app