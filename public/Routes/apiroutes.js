// API Routes

const indexhtml = require (`../../`)

module.exports = (app) => {

app.get(`/api/notes`, (req, res) => res.json(indexhtml))




}