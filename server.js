require("dotenv").config();
require("./utils/db").connect();

const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");

//ROUTES
const zooRouter = require("./routes/zoos/index");
//CONFIG

const app = express();
app.use(morgan("dev"));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use("/zoos", zooRouter);


//PORT
app.listen(3130);
