// API Routes

const indexhtml = require (`../assets/js/index.js`)

module.exports = (app) => {

app.get(`/api/notes`, (req, res) => res.json(indexhtml))




}