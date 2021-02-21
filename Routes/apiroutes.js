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
fs.writeFileSync("./db/db.json", JSON.stringify(dbfile), (err)=>{if(err){throw err}})
res.json(dbfile)
})


app.delete("/notes/:id", (req, res) => {
let notTheNoteYoureDeleting = []
let db = dbfile
for (let index = 0; index < db.length; index++) {
    if (db[index].id!=req.params.id){
notTheNoteYoureDeleting.push(db[index])
}
    
}

db = notTheNoteYoureDeleting
fs.writeFileSync("./db/db.json", JSON.stringify(db), (err)=>{if(err){throw err}})
res.json(db)
}
)



module.exports = app