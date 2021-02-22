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

// this will delete the selected entry
app.delete("/notes/:id", (req, res) => {
let notTheNoteYoureDeleting = []
let db = dbfile
for (let index = 0; index < db.length; index++) {
    if (db[index].id!=req.params.id){
notTheNoteYoureDeleting.push(db[index])
}
    
}
// this will repopulate the db.json file with an updated array after performing the above actions for deletion.
db = notTheNoteYoureDeleting
fs.writeFileSync("./db/db.json", JSON.stringify(db))
res.json(db)
}
)



module.exports = app