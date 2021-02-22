// HTML Routes
const path = require("path");
const app = require("express").Router()


//directs client to the notes.html when "/notes" is added to the end of the URL
app.get("/notes", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/notes.html"));
});


//directs client to the index.html when "/*anything here*" is added to the end of the URL/upon page load.
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/index.html"));
});


module.exports = app;
