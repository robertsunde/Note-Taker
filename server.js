const express = require(`express`);

const apiroutes = require (`./Routes/apiroutes`);
const htmlroutes = require (`./Routes/htmlroutes`);

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"))
app.use("/api", apiroutes)
app.use("/", htmlroutes)
// require(`./public/Routes/apiroutes`)(app);
// require(`./public/Routes/htmlroutes`)(app);


app.listen(PORT, () => {
    console.log(`App listening on PORT: ${PORT}`);
  });