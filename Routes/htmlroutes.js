// HTML Routes

const path = require("path");
const app = require("express").Router()

// module.exports = (app) => {


app.get("/notes", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/notes.html"));
});


// app.get("/index", (req, res) => {
//     res.sendFile(path.join(__dirname, "../index.html"));
// });


app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/index.html"));
});


module.exports = app;
// };