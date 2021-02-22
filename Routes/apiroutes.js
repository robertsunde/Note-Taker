// API Routes
const fs = require (`fs`)
const app = require (`express`).Router()
const dbfile = require ("../db/db.json")


// gets data from notes when url ends in /notes 
app.get("/notes", (req, res) => {
let dbfile = JSON.parse(fs.readFileSync("./db/db.json", "utf-8"))
res.json(dbfile)

}) 

// posts new content to db.json file with included id field. id field will contain a random number up to 100000 to identify each noteContent entry within the db.json file.
app.post("/notes", (req, res) => {
let noteContent = {
title: req.body.title,
text: req.body.text,
id: Math.floor(Math.random()*100000)
}

// this writes the data from above to the db.json file.
dbfile.push(noteContent)
fs.writeFileSync("./db/db.json", JSON.stringify(dbfile))
res.json(dbfile)
})





module.exports = app