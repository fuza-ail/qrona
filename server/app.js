const express = require("express");
const cors = require("cors");
const port = process.env.PORT || 3000;
const app = express();
const router = require("./routes");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/", router);

if (process.env.NODE_ENV !== "test") {
  app.listen(port, () => console.log("Listening on port", port));
}

module.exports = { app };
