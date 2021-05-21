//Dependencies

const express = require("express");

//Creating Port Access for server to be deployed on
const PORT = process.env.PORT || 9000;
//Making the express server object and its methods available to the server
const app = express();

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// result dataParsing server stores it in req.body--is the client data from the form

const htmlRoute = require("./routes/htmlroutes");
app.use(htmlRoute);

const apiRoute = require("./routes/apiroutes");
app.use(apiRoute);
app.listen(PORT, () => {
  console.log(`app is listening on port ${PORT}`);
});
