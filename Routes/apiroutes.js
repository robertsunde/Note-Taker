// API Routes
const fs = require (`fs`)
const app = require (`express`).Router()
const dbfile = require ("../db/db.json")

// module.exports = (app) => {

app.get("/notes", (req, res) => {
let dbfile = JSON.parse(fs.readFileSync("./db/db.json", "utf-8"))
res.json(dbfile)

}) 

app.post("/notes", (req, res) => {
let noteContent = {
title: req.body.title,
text: req.body.text,
id: Math.floor(Math.random()*100000)
}

dbfile.push(noteContent)
fs.writeFileSync("../db/db.json", JSON.stringify(dbfile))
res.JSON(dbfile)
})
//app.post here createnote object with title, text, id generated randomly. push this into db.json file using writefilesync


// }

module.exports = app