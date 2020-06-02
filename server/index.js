const express = require("express");
const cors = require("cors");
const PORT = process.env.PORT || 3000;
const app = express();
const router = require("./routes");

app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(cors());

app.use(router);

module.exports = app